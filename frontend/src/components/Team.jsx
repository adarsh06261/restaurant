import React from 'react'
import {data} from '../restApi.json';

const Team = () => {
  return (
    <section className='team' id = "team">
        <div class="container">
            <div class="heading_section">
                <h1 class="heading">Our Team</h1>
                <p>The only thing we serious about is food.</p>
            </div>
            <div class="team_container">
                {
                    data[0].team.map(element=>{
                        return (
                            <div class="card" key = {element.id}>
                                <img src={element.image} alt={element.name}/>
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Team