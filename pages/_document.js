import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://www.paypal.com/sdk/js?client-id=Act3gk94zu8ejcLW7HF0Is9dEDJYi2QCEWVyxCemlb7uAkJKVofsq9LI4YTxIWGAVU8ePAAQv2KcV8nJ"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
