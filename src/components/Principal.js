import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'

const Principal = () => {
    const [detailsTitle] =useTypewriter({
        words:["Timoteo","Tim","Timy","Timoteo Grvabac"],
        loop:{},
        typeSpeed:80,
        deleteSpeed:30
      })
  return (
    <section id='inicio'>
        <div className='inicioContainer'>
           <h1>{detailsTitle}</h1>
           <Cursor/>
        </div>
    </section>
  )
}

export default Principal
