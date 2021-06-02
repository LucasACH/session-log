import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="description" content="App for logging sailing sessions" />
          <meta name="keywords" content="Sailing" />

          {/* Android */}
          <meta name="theme-color" content="#1E293B" />
          <meta name="mobile-web-app-capable" content="yes" />

          {/* IOS */}
          <meta name="apple-mobile-web-app-title" content="Sailtrack" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          ></meta>

          {/* Windows */}
          <meta name="msapplication-navbutton-color" content="#1E293B" />
          <meta name="msapplication-TileColor" content="#1E293B" />
          <meta
            name="msapplication-TileImage"
            content="/icons/icon-144x144.png"
          />
          <meta name="msapplication-config" content="browserconfig.xml" />

          {/* Pinned Sites */}
          <meta name="application-name" content="Sailtrack" />
          <meta name="msapplication-tooltip" content="Sailtrack" />
          <meta name="msapplication-starturl" content="/"></meta>

          {/* Tap Highlight */}
          <meta name="msapplication-tap-highlight" content="no" />

          {/* UC Mobile Browser */}
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />

          {/* Layout mode */}
          <meta name="layoutmode" content="fitscreen/standard" />

          {/* Imagemode */}
          <meta name="imagemode" content="force" />

          {/* Orientation */}
          <meta name="screen-orientation" content="portrait"></meta>

          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

          {/* Main Link Tags */}
          <link
            href="/public/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/public/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href="/public/icons/favicon-48x48.png"
            rel="icon"
            type="image/png"
            sizes="48x48"
          />

          {/* iOS */}
          <link
            href="/public/icons/apple-touch-icon.png"
            rel="apple-touch-icon"
          />
          <link
            href="/public/icons/touch-icon-iphone-retina.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />

          {/* Pinned Tab */}
          <link
            href="/public/favicon.ico"
            rel="mask-icon"
            sizes="any"
            color="red"
          />

          {/* Android */}
          <link
            href="/public/icons/android-chrome-192x192.png"
            rel="icon"
            sizes="192x192"
          />

          {/* Others */}
          <link
            href="/public/favicon.ico"
            rel="shortcut icon"
            type="image/x-icon"
          />

          {/* UC Browser */}
          <link
            href="/public/icons/icon-72x72.png"
            rel="apple-touch-icon"
            sizes="72x72"
          />

          {/* Manifest.json */}
          <link href="/manifest.json" rel="manifest"></link>
        </Head>
        <body className="bg-lightBackground text-lightFont dark:bg-darkBackground dark:text-darkFont">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
