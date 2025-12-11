import Menu from "../components/Menu";
import logo from '../assets/logo.png'
import Footer from "../components/Footer";
import Card from "../components/Card";

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
                <Card />
                <Card />
                <Card />
            </main>
            <Footer />
        </div>
    );
}