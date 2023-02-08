import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="bg-gray-300">
          <div className=" flex mx-auto max-w-6xl justify-center">
            <img alt="teletubbies logo" src="/images/teletubbies-logo.png" />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto bg-slate-100">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
