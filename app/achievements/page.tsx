import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Achievement  ${METADATA.exTitle}`,
  description: "List of achievements and experiences",
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

const AchievementsPage = () => {
  const t = useTranslations("AchievementsPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Achievements />
    </Container>
  );
};

export default AchievementsPage;
