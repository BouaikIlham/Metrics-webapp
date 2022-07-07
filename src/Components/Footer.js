import React from 'react';

const space = ' ';

const Footer = () => (
    <footer>
        <a href="https://github.com/BouaikIlham">
            Copyright ©IlhamBouaik
            {space + new Date().getFullYear()}
        </a>
    </footer>
);

export default Footer;