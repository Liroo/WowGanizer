import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="en-EN"
        className="overflow-y-auto overflow-x-hidden overscroll-none"
      >
        <Head>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <Main />
          <div id="portal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
