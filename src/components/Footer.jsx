import React from 'react'
import './Footer.css';
const Footer = (props) => {
    return (
        <div className="bg-light text-center text-lg-start">
            <div className="text-center p-3">
                © 2023 Copyright: &nbsp;
                <a classNAme="text-dark" href="https://misitio.cl/">{props.titulo}</a>
            </div>        
        </div>
    )
}
export default Footer