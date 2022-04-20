import axios, { Axios } from 'axios';
import Head from 'next/head'
import { useEffect, useState, Fragment } from 'react';
import { Divider, Header , Dimmer, Loader, Image , Segment} from 'semantic-ui-react';
import styles from '../styles/Home.module.css'
import Itemlist from './itemlist';

// yarn add -D css-loader 필요
// yarn add semantic-ui-react semantic-ui-css 로 시멘틱 ui 설치
export default function Home({item}) {
  // const API_URI = axios.get();

  // const [list, setlist] = useState([]);
  // const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").then((res) => {
  //     setlist(res.data);
  //     setloading(false);
  //   });
  // }, []);

  console.log(item);

  return (
    <Fragment>
      <div>
        <Head>
          <title>HOME | Striker</title>
          <meta name="description" content="Nextjs"></meta>
        </Head>
          <Fragment>
            <Header as="h3">베스트 상품</Header>
            <Divider />
            <Itemlist list={item} />
          </Fragment>
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
    const res = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`);
    const data = res.data;

    return {
        props: {
            item: data ,
        }
    }
}