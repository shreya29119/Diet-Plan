import React, { Component } from 'react';
import './Footer.css';
import logo from './icon.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import twitter from './twitter.png';
import cr from './copyright.png';
 class Footer extends Component {
    render() {
        return (
            <>
                <div id="footer">
                    <div className="div">
                        <div id="part1">
                            <img src={logo} alt="Logo" />
                            <a class="navbar-brand" href="#" id="h1">Daietto</a>
                        </div>
                        <div id="part-2">
                            <ul id="ul">
                                <li id="li li1">Daietto</li>
                                <li id="li">Beneficious</li>
                                <li id="li">Cedito</li>
                                <li id="li">Contacto</li>
                            </ul>
                        </div>
                        <div id="part-3">
                            <ul id="ul">
                                <li id="li">Nosotros</li>
                                <li id="li">Terminos y condicious</li>
                                <li id="li">Aviso de privacidad</li>    
                            </ul>
                        </div>
                        <div id="part-4">
                            <a href="#"><img src={instagram} alt="instagram" id="s-img"/></a>
                            <a href="#"><img src={twitter} alt="twitter" id="s-img" /></a>
                            <a href="#"><img src={facebook} alt="facebook" id="s-img" /></a>

                            <p id="p1">Tu app de <br /> dieta </p>
                        </div>
                     </div>
                     <img src={cr} alt="copyright" id="img2"/>
                     <p id="p2">2021 Daietto Derechos Reservados.</p>
                </div>
            </>
        )
    }
}

export default Footer
