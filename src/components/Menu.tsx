import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className='menu'>
            <Link to="/">Home</Link>
            <Link to="/shop">Loja</Link>
            <Link to="/collections">Coleções</Link>
            <Link to="/sale">Promoção</Link>
            <Link to="/about">Sobre Nós</Link>
        </nav>
    );
}