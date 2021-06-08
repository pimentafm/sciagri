import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Sciagri Smart Agriculture</title>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="http://localhost:3000/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="http://localhost:3000/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="http://localhost:3000/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="https://localhost:3000/images/safari-pinned-tab.svg"
            color="#181b23"
          />

          <meta name="title" content="Sciagri Smart Agriculture" />

          <meta
            name="author"
            content="Developed by Fernando Martins Pimenta -
            fernando.m.pimenta@gmail.com"
          />

          <meta
            name="description"
            content="Geoprocessing and Remote Sensing for Agriculture"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sciagri.tech/" />
          <meta property="og:title" content="Sciagri Smart Agriculture" />
          <meta
            property="og:description"
            content="Geoprocessing and Remote Sensing for Agriculture"
          />
          <meta
            property="og:image"
            content="http://localhost:3000/images/sciagri.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://sciagri.tech/" />
          <meta name="twitter:creator" content="@fern_pimenta" />
          <meta property="twitter:title" content="Sciagri Smart Agriculture" />
          <meta
            property="twitter:description"
            content="Geoprocessing and Remote Sensing for Agriculture"
          />
          <meta
            property="twitter:image"
            content="https://localhost:3000/images/sciagri.png"
          />

          <meta name="apple-mobile-web-app-title" content="Sciagri" />
          <meta name="application-name" content="Sciagri" />
          <meta name="msapplication-TileColor" content="#181b23" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#181b23" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
