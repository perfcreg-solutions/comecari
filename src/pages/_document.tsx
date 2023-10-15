import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <link rel='apple-touch-icon' href='/logo192.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='logo/favicon.svg' />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjNbi8kihUXzBgEPlDqa_Ko7e8lM7kfg8"></script>
      </Head>
      <body id='root'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
