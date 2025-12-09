import Menu from "../components/Menu";
import logo from '../assets/logo.png'
import Footer from "../components/Footer";

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
                <h1>Bem-vindo ao Dashboard</h1>
                <p>Esta é a página principal do seu aplicativo.</p>
            </main>
            <Footer />
        </div>
    );
}