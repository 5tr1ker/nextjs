import { Fragment } from "react";
import { Button } from "semantic-ui-react";

export default function Item({ item }) {
    const { image_link, name, price, description } = item;
    console.log(item);
    return (<Fragment>
        <div>
            <img src={image_link} alt="imag" />
        </div>
        <div>
            <strong>{name}</strong>
            <strong>${price}</strong>
        </div>
        <div>
            <Button color="orange">구매하기</Button>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </Fragment>)
}