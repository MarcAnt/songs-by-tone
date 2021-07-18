import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --bgColor: #fffcf2;
        --generalColor: #fffcf2;
        --generalColorDark: #f6f4ec;
        --btnBgColor: #663399;
        --btnBorder: #fdfdfdc7;
        --error: #f21d2b;
        --success: #1DF27A;
    }

    html {
        font-size: 16px;
        font-family: 'Nunito', sans-serif;
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

    a {
        color: var(--btnBgColor);
        text-decoration: none;
    }

    nav {
        text-align: center;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.2rem;
        a.create {
            font-weight: bolder;
            background-color: var(--bgColor);
            border: 1px solid var(--btnBgColor);
            border-radius: 4px;
            padding: .5rem;
            transition: all .3s ease-in-out;
        }

        a.create:hover {
            background-color: var(--btnBgColor);
            border: 1px solid var(--bgColor);
            color: var(--generalColor);
        }
    }

    button, input[type="submit"] {
        background-color: var(--btnBgColor);
        color: var(--generalColor);
        font-family: "Nunito";
        padding: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        font-size: 1rem;
        text-align: center;
        letter-spacing: .25rem;
        text-transform: uppercase;
        transition: border .1s ease-in-out;
    }

    span{

        button[type="button"] {
            width: auto;
            padding: .5rem;
            border-radius: 4px;
            letter-spacing: .1rem;
            text-transform: none;
            margin-left: .5rem;
        }
        button[type="button"]:hover {
            border: none;
        }
    }


    
    input[type="text"],input[type="search"] {
        width: 50%;
        margin: 1rem;

        font-family: "Nunito";
        border-radius: 16px;
        border: 0.5px solid #ddd;
        padding: 1rem;
        outline: none;
        transition: all .3s ease-in-out;
    }

    input[type="text"]:focus,input[type="search"]:focus {
        border: 2px solid var(--btnBgColor);
    }



    input[type="submit"] {
        width: 25%;
    } 

    button:focus, input[type="submit"]:focus {
        border: 5px solid var(--btnBorder);
    }
    button:hover, input[type="submit"]:hover {
        border: 5px solid var(--btnBorder);
    }

    .form-wrapper {
        height: 70vh;
    }

    form {
        margin: 1.5rem auto auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        span {
            width: 50%;
        }
    }

    footer {
        /* position: absolute;
        bottom: 0; */
        text-align: center;
        width: 100%;
        padding: 1rem 4rem;

        p {
            display: flex;
            justify-content: space-between;
        }

        a {
            font-weight: bold;
        }
    }

    table {
        width: 90%;
        margin: 2rem auto;
        padding: 1rem;
        text-align: left;
        border-collapse: collapse;

        th, td {
            border-bottom: 0.5px solid #ddd;
            padding: .3rem;
        }

        th:nth-child(2) {
            padding-right: 1rem;
        }
    }

    .card-grid {
        display: grid;
        align-content: center;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 1.5rem auto;
        max-width: 1000px;
        min-width: 300px;

    }


    .card-item {
        
        /* height: 300px;
        width: 300px; */
        text-align: center;
        background-color: var(--generalColorDark);
        border-radius: 1rem;
        border: 4px solid var(--generalColor);
        box-shadow: 1px 1px 5px grey;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        color: var(--btnBgColor);
        transition: all .2s ease-in-out;
        cursor: pointer;
        h4 {
            font-size: 1.1rem;
        }

        p{
            font-weight: bolder;
            font-size: 5rem;
            margin: 1rem auto;
        }

        span {
            font-size: 1.3rem;
        }

    }

    .card-item:hover {
        transform: translateY(.25rem);
    }

    @media (max-width: 1024px) {
        .card-grid {
            margin: 1.5rem;
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
