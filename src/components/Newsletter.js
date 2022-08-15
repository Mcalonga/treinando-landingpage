import React from 'react'
import './Newsletter.css'
import image from '../images/pngwing.com.png'


const Newsletter = () => {
  return (
    <div className='container-body'>
        <div className='container-insc'>
            <h1>Aprenda a meditar hoje.</h1>
            <h2>Centenas de videos de meditação.</h2>
            <p> Junte-se a nós, e venha fazer parte da maior comunidade de meditação. </p>
            <button>INSCREVA-SE Agora</button>
            <h2>Receba noticias sobre meditação </h2>
            <form className='forms-list'>
                <input className='nomed' type="text" placeholder='escreva seu nome' />
                <input className='emaild' type="email" placeholder='escreva seu email'/>
                <input className='submitd' type="submit" />
                
            </form>
        </div>
        <div className='container-imagem'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Newsletter