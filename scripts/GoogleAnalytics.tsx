import Script from 'next/script';

const GoogleAnalyTics = () => {
  if (process.env.NODE_ENV === 'development') {
    return null;
  }
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <Script
      id="google-analytics"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${gaId});
    `,
      }}
    />
  );
};
export default GoogleAnalyTics;
