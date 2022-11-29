/* import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/',{
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
      <h1> Login </h1>
    <hr />
    <button 
    className='btn btn-primary' 
    onClick={ onLogin }>
      Login
    </button>
    </div>
  )
}

export default LoginPage;  */



/* import React, {useState} from 'react';
import LoginInput from '../Components/Logincomponents/LoginInput'
import LoginButton from '../Components/Logincomponents/LoginButton'
import ShowError from '../Components/Logincomponents/ShowMessage';
import UserServices from '../Services/UserServices'

const LoginPage = ({setToken}) => {
    const Login = UserServices.login;

    const [formData, setFormData] = useState({
        user: "",
        password: ""
    });

    const [showError, setShowError] = useState(false);

    //Obtener los datos del formulario
    const handleInputChange = (e, change) => { 
        const {name, value} = e.target;

        change({...formData, [name]: value});
    }
    
    //Funcion para iniciar sesion
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        const token = await Login(formData.user, formData.password);
        
        if(token){
            setToken(token);
        }
        else{
            setShowError(true);
            setFormData({user: "", password: ""})
        }
    }

    return (
        <section className="min-h-screen flex items-stretch text-white">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-login-image">
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
                <h1 className="text-5xl font-bold font-oswald text-left tracking-wide">Connect with phantastic people</h1>
            </div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-dark-300">
            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-login-image">
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div className="w-full py-6 z-20">
                <img src={Logo} alt="logo" className="w-auto my-6 h-10 sm:h-11 inline-flex" />
                <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto" onSubmit={onSubmitHandler}>
                    {showError && <ShowError title="¡Advertencia!" message="No se ha podido iniciar sesión, credenciales incorrectas"/>}
                    <LoginInput name="user" placeholder="User or Email" onChange={(e)=>handleInputChange(e, setFormData)} value={formData.user}/>
                    <LoginInput name="password" placeholder="Password" type={"password"} onChange={(e)=>handleInputChange(e, setFormData)} value={formData.password}/>
                    <LoginButton child={"Login"}/>
                </form>
            </div>
        </div>
    </section>
    )
}

export default LoginPage; */