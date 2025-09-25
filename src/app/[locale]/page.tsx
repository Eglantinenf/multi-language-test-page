"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="p-8">
      <LanguageSwitcher />
      <h1 className="text-2xl font-bold mt-4">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
