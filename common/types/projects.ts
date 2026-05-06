export type ProjectItem = {
  id: number;
  title: string;
  title_id?: string | null;
  slug: string;
  description: string;
  description_id?: string | null;
  image: string;
  link_demo?: string | null;
  link_github?: string | null;
  stacks: string[];
  content?: string | null;
  is_show: boolean;
  is_featured: boolean;
};

export type ProjectItemProps = {
  projects: ProjectItem[];
}
