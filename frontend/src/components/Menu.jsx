import React from 'react'
import {data} from '../restApi.json'

const Menu = () => {
  return (
    <section className='menu' id = "name">
        <div class="container">
            <div class="headingsection">
                <h1 className='heading'>POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam doloribus, hic odio eos et perspiciatis unde tempore fuga, ullam itaque animi sint! At, eos culpa ab maiores mollitia autem.</p>
            </div>
            <div class="dishes_container">
                    {
                        data[0].dishes.map(element=>{
                            return (
                                <div class="card" key = {element.id}>
                                    <img src={element.image} alt={element.title}/>
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
        
    </section>
  )
}

export default Menu