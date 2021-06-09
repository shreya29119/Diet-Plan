import React, { Component } from 'react';
import './Middle1.css';
import img from './preview.png';
import icons from './icons.png';
import image from './image.png';
import image1 from './image1.png';

export class Middle1 extends Component {
    render() {
        return (
            <div>
                <div id="main">
                    <div id="text">
                        <div id="div1"></div>
                        <p id="p1">La app de dieta, perfecta para ti</p>
                        <h1 id="h1"><span id="span2">Deliciosas</span> <br /> recetas de comida <br /> saludable</h1>
                        <p id="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button type="button" class="btn btn-secondary" id="button">Descarger app</button>
                        <img id="img" src={icons} alt="Icons" />
                        <p id="social"> <a href="#"><span id="span">Facebook </span></a> / <a href="#"><span id="span-2"> Instagram  </span></a> / <a href="#"><span id="span"> Twitter</span></a> </p>
                    </div>

                    <div id="img">
                        <img src={img} alt="Image" />
                    </div>

                </div>

                <div id="middle">

                    <div id="img">
                         <img src={image} alt="Image" />
                    </div>

                    <div id="text" className="text1">
                        <div id="div1"></div>
                        <h1 id="h1"><span id="span2">Descubre</span> que tan facil <br /> crear alimentos <br /> saludabless</h1>
                        <p id="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                            scrambled it to make a type specimen book</p>
                    </div>

                </div>

                <div id="last">
                    
                    <div id="text">
                        <div id="div1"></div>
                        <h1><span id="span2">Conoce</span> el detalle de los <br /> alimentos que <br />
                        consumes</h1>
                        <p id="p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                        piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                         a Latin professor at Hampden-Sydney College in Virginia</p>
                    </div>

                    <div id="img">
                         <img src={image1} alt="Image" />
                    </div>

                </div>
            </div>
        )
    }
}

export default Middle1
