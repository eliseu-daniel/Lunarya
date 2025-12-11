import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Card from "../components/Card";
import logo from '../assets/logo.png'
import saia from "../assets/saia.png";
import macacao from "../assets/macacaoCanelado.png";
import top from "../assets/topMangaLonga.png";

export default function Dashboard() {
    return (
        <div className='app'>
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className='menu-container'>
                <Menu />
            </div>
            <main className='main-content'>
                <Card img={saia} text="Conjunto Esportivo Academia Top com Shorts Saia Suplex" price="61,49" />
                <Card img={macacao} text="Macacão Canelado Academia com Bojo" price="97,50" />
                <Card img={top} text="Conjunto Top Manga Longa Costa Aberta + Legging" price="102,60" />
            </main>
            <Footer />
        </div>
    );
}