import Head from 'next/head';
import React from 'react';

const BasicHead: React.FC<{
  title?: string;
}> = ({ title }) => {
  const appName = 'Pomolife';
  const fullTitle = title ? `${title} | ${appName}` : appName;

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="shortcut icon" type="image/png" href="/images/icons/icon-512x512.png" />
      <link rel="apple-touch-icon" type="image/png" href="/images/icons/icon-512x512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#003366"/>
      <meta name="version" content={`v${process.env.version}`} />
    </Head>
  );
};

export default BasicHead;
