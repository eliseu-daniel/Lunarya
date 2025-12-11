import saia from "../assets/saia.png";

type CardProps = {
    img: string;
    text: string;
    price: string;
}

export default function Card() {
    return (
        <div className="card">
            <img className="imgCard" src={saia} />
            <p className="textCard">Conjunto Esportivo Academia Top com Shorts Saia Suplex</p>
            <p className="priceCard">R$ 61,49</p>
        </div>
    );
}