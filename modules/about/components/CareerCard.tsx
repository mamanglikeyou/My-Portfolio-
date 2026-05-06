"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { BsBuildings as CompanyIcon } from "react-icons/bs";
import { HiChevronRight as ChevronIcon } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { differenceInMonths, differenceInYears, format } from "date-fns";

import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { CareerProps } from "@/common/types/careers";

const CareerCard = ({
  translationKey,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
  responsibilities,
  indexCareer,
}: CareerProps) => {
  const [isShowResponsibility, setIsShowResponsibility] = useState(false);

  const t = useTranslations("AboutPage.career");

  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : new Date();

  const durationYears = differenceInYears(endDate, startDate);
  const durationMonths = differenceInMonths(endDate, startDate) % 12;

  const yearText = durationYears > 1 ? t("months") : t("month");

  let durationText = "";
  if (durationYears > 0) {
    durationText += `${durationYears} ${yearText}`;
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} ${t(durationMonths > 1 ? "months" : "month")}`;
  }

  // Get translated values via translationKey
  const position = t(`careers.${translationKey}.position`);
  const type = t(`careers.${translationKey}.type`);
  const locationType = t(`careers.${translationKey}.location_type`);

  // Get translated responsibilities array
  const translatedResponsibilities: string[] = [];
  if (responsibilities) {
    for (let i = 0; i < responsibilities.length; i++) {
      try {
        translatedResponsibilities.push(
          t(`careers.${translationKey}.responsibilities.${i}`),
        );
      } catch {
        translatedResponsibilities.push(responsibilities[i]);
      }
    }
  }

  const presentText = t("present");

  return (
    <SpotlightCard className="flex items-start gap-5 p-6">
      {logo ? (
        <Image
          width={60}
          height={60}
          src={logo}
          alt={company}
          className="rounded-lg border-[1.5px] border-neutral-800 bg-neutral-100 dark:border-neutral-300"
        />
      ) : (
        <CompanyIcon size={65} />
      )}

      <div className="space-y-1">
        <h5>{position}</h5>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-2 md:flex-row">
            <Link href={link || "#"} target="_blank">
              <span className="cursor-pointer hover:text-neutral-900 hover:underline hover:dark:text-neutral-50">
                {company}
              </span>
            </Link>
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{location}</span>
          </div>

          <div className="flex flex-col gap-2 text-[13px] md:flex-row">
            <div className="flex gap-1 text-neutral-600 dark:text-neutral-400">
              <span>{format(startDate, "MMM yyyy")}</span> -{" "}
              <span>{end_date ? format(endDate, "MMM yyyy") : presentText}</span>
            </div>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span className="text-neutral-500">{durationText}</span>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              {type}
            </span>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              {locationType}
            </span>
          </div>

          {translatedResponsibilities.length > 0 && (
            <>
              <button
                onClick={() => setIsShowResponsibility(!isShowResponsibility)}
                className="-ml-1 flex items-center justify-center gap-x-1 transition duration-300 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300"
              >
                <ChevronIcon
                  size={18}
                  className={clsx({
                    "rotate-90 transition-all duration-300":
                      isShowResponsibility,
                  })}
                />
                <p className="text-sm">
                  {isShowResponsibility
                    ? t("hide_responsibilities")
                    : t("show_responsibilities")}
                </p>
              </button>
              <AnimatePresence>
                {isShowResponsibility && (
                  <motion.ul
                    className="ml-[18px] list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {translatedResponsibilities.map((responsibility, index) => (
                      <motion.li key={index} layout>
                        {responsibility}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default CareerCard;
