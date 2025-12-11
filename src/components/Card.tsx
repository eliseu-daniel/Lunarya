type CardProps = {
    img: string;
    text: string;
    price: string;
}

export default function Card({ img, text, price, ...props }: CardProps) {
    return (
        <div className="card">
            <img className="imgCard" src={img} />
            <p className="textCard">{text}</p>
            <p className="priceCard">R${price}</p>
        </div>
    );
}