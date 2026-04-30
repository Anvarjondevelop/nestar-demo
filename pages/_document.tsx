import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("Document Rendering");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar-demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="img/png" href="/img/logo/favicon.svg" />
        {/* SEO OPTIMIZATION -> Search Engine Optimization */}
        <meta
          name="keyword"
          content={"Nestar, nestar.uz, devex mern , mern nestjs fullstack"}
        />
        <meta
          name="description"
          content={
            "Buy and sell properties anywhere anytime in South Korea |" +
            "Janubiy Koreyada istalgan joyda va istalgan vaqtda kochmas mulkni sotib oling va soting. |" +
            "대한민국 어디서나 언제든지 부동산을 사고 팔 수 있습니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
