"use client";

import Image from "next/image";
import { BsBuildings as CompanyIcon } from "react-icons/bs";
import { useTranslations } from "next-intl";

import { EducationProps } from "@/common/types/education";
import SpotlightCard from "@/common/components/elements/SpotlightCard";

const EducationCard = ({
  translationKey,
  school,
  logo,
  start_year,
  end_year,
  link,
  location,
}: EducationProps) => {
  const t = useTranslations("AboutPage.education.items");

  const major = t(`${translationKey}.major`);
  const degree = t(`${translationKey}.degree`);

  return (
    <SpotlightCard className="flex items-start gap-5 p-6">
      {logo ? (
        <Image width={70} height={70} src={logo} alt={school} />
      ) : (
        <CompanyIcon size={65} />
      )}

      <div className="space-y-1">
        <a href={link || "#"} target="_blank">
          <h6>{school}</h6>
        </a>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <span>{major}</span>
            {degree && (
              <>
                <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
                  •
                </span>
                <span>{degree}</span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-1 text-[12px] md:flex-row md:gap-2">
            <span className="dark:text-neutral-500">
              {start_year} - {end_year}
            </span>
            <span className="hidden rounded-full text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default EducationCard;
