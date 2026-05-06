import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import matter from "gray-matter";

import { MdxFileProps } from "../types/mdx";

export const loadMdxFiles = (locale?: string): MdxFileProps[] => {
  const dirPath = path.join(process.cwd(), "contents", "projects");

  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs.readdirSync(dirPath);

  // Filter out locale-specific files from the base list
  const baseFiles = files.filter(
    (file) => !file.match(/\.[a-z]{2}\.mdx$/),
  );

  const contents = baseFiles.map((file) => {
    const slug = file.replace(".mdx", "");

    // Try to load locale-specific file first (e.g., ParaphrasingSystem.id.mdx)
    let filePath: string;
    const localeFile = `${slug}.${locale}.mdx`;
    if (locale && locale !== "en" && files.includes(localeFile)) {
      filePath = path.join(dirPath, localeFile);
    } else {
      filePath = path.join(dirPath, file);
    }

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);

    const mdxCompiler = remark().use(remarkParse).use(remarkGfm).use(remarkMdx);
    const mdxContent = mdxCompiler.processSync(content).toString();

    return {
      slug,
      frontMatter: data,
      content: mdxContent,
    };
  });

  return contents;
};
