import React from 'react';
import home from '../../Assets/home.jpg'
import './Home.css'

const HomePage = () => {
  return (
    <>
      <hr />
      <div className='contenedores'>
        <div className='contenedor1'>
          <p>"Todos encontrarían su vida más interesante si dejaran de compararla con la vida de los demás" Henry fonda</p>
        </div>
        <figure >
          <img src={home} alt="imagenhome" className='imagen' />
        </figure>
      </div>
    </>
  )
}

export default HomePage
