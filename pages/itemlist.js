import Link from 'next/link';
import React from 'react'
import { Grid, Image, Item } from 'semantic-ui-react'
import styles from '../styles/itemlist.module.css';

export default function Itemlist({ list }) {
    return (
        <Grid columns={3} divided>
            <Grid.Row>
                {list.map((item => (
                    <Grid.Column key={item.id}>
                        <Link href={`/detail/${item.id}`}>
                            <div className={styles.items}>
                                <img className={styles.itemimg} src={item.image_link} alt={item.name}></img>
                                <span>
                                    <strong className={styles.itemname}>{item.name}</strong>
                                </span>
                                <strong className={styles.itemprice}>${item.price}</strong>
                            </div>
                        </Link>
                    </Grid.Column>
                )))}
            </Grid.Row>
        </Grid>
    )
}