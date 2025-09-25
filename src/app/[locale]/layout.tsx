import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";

interface Props {
  params: { locale: string };
  children: ReactNode;
}

const LocaleLayout = async ({ children, params }: Props) => {
  const locale = params.locale;
  if (!locale) notFound();
  const messages = await import(`../../locales/${locale}.json`).then(
    (m) => m.default
  );
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </html>
  );
};

export default LocaleLayout;
