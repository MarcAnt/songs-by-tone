import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --bgColor: #fffcf2;
        /* --bgColor: #b5651d; */
        --generalColor: #fffcf2;
        --generalColorDark: #f6f4ec;
        --btnBgColor: #3D444B;
        --btnBorder:  #66339980;
        --btnBorderDark:  #663399;
        --error: #f21d2b;
        --success: #1DF27A;
    }

    html {
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
    }

    html, * {
        padding: 0; 
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--generalColor);
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    .site-wrapper {
    
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex-grow: 1;
    }

    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        }

    a {
        color: var(--btnBgColor);
        text-decoration: none;
    }   

    button, input[type="submit"] {
        background-color: var(--btnBgColor);
        color: var(--generalColor);
        font-family: "Rubik";
        padding: 1rem;
        font-weight: bold;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        text-align: center;
        letter-spacing: .25rem;
        text-transform: uppercase;
        transition: border .1s ease-in-out;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active
    {
    box-shadow: 0 0 0 30px white inset !important;
    }


    
    input[type="text"],input[type="search"] {
        width: 50%;
        margin: 1rem;
        font-family: "Rubik";
        border-radius: 4px;
        border: 0.5px solid var(--btnBgColor);
        padding: 1rem;
        outline: none;
        transition: all .3s ease-in-out;
    }

    input[type="text"]:focus,input[type="search"]:focus {
        border: 1px solid var(--btnBgColor);
    }

    input[type="submit"] {
        width: 25%;
    } 

    button:focus, input[type="submit"]:focus {
        box-shadow: 0 0 0 2px var(--btnBorder);
    }
    button:active, input[type="submit"]:active {
        background-color: var(--btnBorder);
    }
  
  
    form {
        margin: 0 auto;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        span {
            width: 100%;
        }

        
    }

    

    @media (max-width: 379px) {
        button, input[type="submit"],input[type="text"] {
            width: 70%;
        }

    }

    @media (min-width: 380px) {
        button, input[type="submit"]  {
            width: 50%;
        }
    }

`;
