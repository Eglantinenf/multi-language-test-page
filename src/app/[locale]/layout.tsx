import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";

interface Props {
  params: { locale: string };
  children: ReactNode;
}

interface Messages {
  title: string;
  description: string;
}

const LocaleLayout = async ({ children, params }: Props) => {
  const locale = params.locale;
  if (!locale) notFound();
  let messages: Messages;
  try {
    messages = await import(`../../../locales/${locale}.json`).then(
      (m) => m.default as Messages
    );
  } catch {
    notFound();
  }

  return (
    <div dir={locale === "fa" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

export default LocaleLayout;
