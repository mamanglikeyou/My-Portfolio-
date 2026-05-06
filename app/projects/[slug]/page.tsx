import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import { getProjectsDataBySlug } from "@/services/projects";
import { getUserLocale } from "@/services/locale";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const project = await getProjectDetail(params?.slug);

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      images: project.image,
      url: `${METADATA.openGraph.url}/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
  };
};

const getProjectDetail = async (slug: string): Promise<ProjectItem> => {
  const projects = await getProjectsDataBySlug(slug);
  const locale = await getUserLocale();
  const contents = loadMdxFiles(locale);
  const content = contents.find((item) => item.slug === slug);
  const response = { ...projects, content: content?.content };
  const data = JSON.parse(JSON.stringify(response));
  return data;
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const data = await getProjectDetail(params?.slug);
  const locale = await getUserLocale();

  const PAGE_TITLE =
    locale === "id" && data?.title_id ? data.title_id : data?.title;
  const PAGE_DESCRIPTION =
    locale === "id" && data?.description_id
      ? data.description_id
      : data?.description;

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default ProjectDetailPage;
