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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim a vitae
                    corporis expedita error, quidem nisi accusantium iste illum sit dolor alias quaerat
                    molestias debitis quasi eum at tempore!
                </p>
            </main>
            <Footer />
        </div>
    );
}