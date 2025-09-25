"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <LanguageSwitcher />
      <h1 className="text-3xl font-bold mt-6 text-gray-900">{t("title")}</h1>
      <p className="mt-4 text-lg text-gray-700">{t("description")}</p>
    </div>
  );
}
