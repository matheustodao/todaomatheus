import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/*
            Fonts
            -> Poppins=400, 700
            -> Outfit=500,700
            -> Inter=400,500,600,700
          */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <div id="portals" />
        <NextScript />
      </body>
    </Html>
  );
}
