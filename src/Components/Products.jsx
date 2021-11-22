import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Products(){
    return(
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam, neque quisquam? Reprehenderit quod quo saepe eum harum nesciunt dolor 
                ducimus?
            </p>
            <div className="a-container">
                <Productbox image={pimage1} title="Luger Burger"/>
                <Productbox image={pimage2} title="Le Piegon Burger"/>
                <Productbox image={pimage1} title="Luger Burger"/>
            </div>


        </div>
    )
}

export default Products;