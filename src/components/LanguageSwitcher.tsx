"use client";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.startsWith("/fa") ? "fa" : "en";
  const toggleLocale = () => {
    const newLocale = locale === "en" ? "fa" : "en";
    const newPath = `/${newLocale}${pathname.replace(/^\/(en|fa)/, "")}`;
    router.push(newPath);
  };
  return (
    <div>
      <button onClick={toggleLocale}>
        {locale === "en" ? "فارسی" : "English"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
