import axios, { Axios } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";
import Item from "../Item";

export default function name({ item}) {
    return (
        <Fragment>{item &&
            <Fragment>
                <Head>
                    <title>{item.name}</title>
                    <meta name="description" content={item.description}></meta>
                </Head>
                <Item item={item} />
            </Fragment>}
        </Fragment>
    )
}

export async function getServerSideProps(context) { // context 로 URL 쿼리 , 응답 , 요청 , params 를 담고있습니다.
    const id = context.params.id;
    const res = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
    const data = res.data;

    return {
        props: {
            item: data ,
        }
    }
}

