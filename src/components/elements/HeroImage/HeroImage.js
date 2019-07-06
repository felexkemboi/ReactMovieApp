import React from 'react';
import './HeroImage.css';

const HeroImage = (props) =>{
    return(
        <div className="rmdb-heroimage"
        //one for javascript and one for css object 
         style = {{
            //background-color: lightblue,
            url('${props.image}');
         }}
        >
            <div className="rmdb-heroimage-content">
                <div className="rmdb-heroimage-text">
                    <h1>{ props.title }</h1>
                    <p>{ props.text }</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;