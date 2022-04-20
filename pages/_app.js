import '../styles/globals.css'
import Footer from './components/footers'
import Tops from './components/tops'
import 'semantic-ui-css/semantic.min.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) { // Component 현재 페이지 , pageProps datapatching 메소드로 미리 가져온 초기 객체
  return (
    <div>
      <Head>
        <title>페이지 정보</title>
      </Head>
      <Tops />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

// 레이아웃을 만들기위해 _app을 만들며 모든 페이지는 이 파일을 거칩니다.
// 글로벌 css는 이곳에 선언하고
// 추가적인 데이터를 페이지로 주입시켜주기 가능
// componentDidCatch 로 커스텀 에러 핸들링 가능
// 페이지 전환시 상태값을 유지할 수 있다.
// title 작업