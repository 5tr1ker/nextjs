import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>상진 Nextjs</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// next 에서 제공하는 document를 커스텀마이징을 할 수 있다.
// NEXT는 마크업 정의를 건너뛰기에, HTML 이나 HEAD 태그를 만져야 할때는 _document.js를 만져주자

// _app 은 css 나 기능을 구현할때
// _document 는 서버에서만 렌더링되고 onclick 이나 css는 적용되지않습니다.
// 즉 이 파일은 서버에서만 렌더링되므로 에서와 같은 이벤트 핸들러를 사용할 수 없습니다 <html> <body> onClick _document