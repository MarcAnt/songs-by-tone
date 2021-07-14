import React from 'react'

const today = new Date();
const YEAR = today.getFullYear();

const Footer = () => {
    return (
        <footer>
            <p>Created by: @bymarcant</p>
            <span>version: 1.0.0 {YEAR}</span>
            
        </footer>
    )
}
export default Footer;