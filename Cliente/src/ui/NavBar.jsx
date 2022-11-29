import { Link, NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

export const Navbar = () => {
    //para navegar
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }
    const onHamburger = () => {
        navigate('/hamburger', {
            replace: true
        });
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark" id="neubar">

            <div className="container">

                <div className="navbar-collapse">
                    <ul className="navbar-nav ms-auto" >
                        <button className="nav-item nav-link btn"
                            onClick={onHamburger} >
                            <i className="fas fa-bars"></i>
                        </button>
                    </ul>

                </div>

                <div className=" navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link mx-2 ${isActive ? 'active' : ' aria-current="page"'}`}
                            to="/home"
                        >
                            Inicio
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  mx-2 ${isActive ? 'active' : ' aria-current="page"'}`}
                            to="/search"
                        >
                            Búsqueda
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  mx-2 ${isActive ? 'active' : ' aria-current="page"'}`}
                            to="/mision"
                        >
                            Misión
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  mx-2 ${isActive ? 'active' : ' aria-current="page"'}`}
                            to="/Vision"
                        >
                            Visión
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  mx-2 ${isActive ? 'active' : ' aria-current="page"'}`}
                            to="/about"
                        >
                            Acerca_de
                        </NavLink>
                    </ul>

                </div>


                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-primary"
                        >
                            Rodolfo
                        </span>

                        <button
                            className='nav-item nav-link btn'
                            onClick={onLogout}
                        >
                            <i className='fas fa-sign-out-alt' ></i>
                            <span>Logout</span>
                        </button>
                    </ul>
                </div>

            </div>
        </nav>



    )
}