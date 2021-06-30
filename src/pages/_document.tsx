import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* fontes */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          {/* renderiza toda a aplicação */}
         <Main />
          {/* onde vai colocar os arquivos js necessários para a aplicação funcionar */}
         <NextScript />
        </body>
      </Html>
    )
  } 
}