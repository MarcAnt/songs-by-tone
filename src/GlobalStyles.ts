import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --bgColor: #fffcf2;
        --generalColor: #fffcf2;
        --generalColorDark: #f6f4ec;
        --btnBgColor: #663399;
        --btnBorder:  #66339980;
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
        border-radius: 4px;
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

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active
    {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
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
        /* border: 5px solid var(--btnBorder); */
        box-shadow: 0 0 0 5px var(--btnBorder);
    }
    button:active, input[type="submit"]:active {
        /* border: 5px solid var(--btnBorder); */
        background-color: var(--btnBorder);
    }
    button:hover, input[type="submit"]:hover {
        /* border: 5px solid var(--btnBorder); */
        box-shadow: 0 0 0 5px var(--btnBorder);
    }

    .site-wrapper {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        min-height: 100vh;
    }

    .form-wrapper {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;

        section {
            flex: 50%;
            
            p {
                padding-left: 2rem;
                font-size: 2.5rem;
                font-weight: bolder;
                width: 80%;

                span {
                    color: var(--btnBgColor);
                }
            }

        }
        form {
            flex: 50%;
            margin: 0;
        }
    }

    .song-search-container {

        height: 80vh;

        section p {
            text-align: center;
            font-weight: bolder;
            font-size: 2rem;
            padding: 1rem 2rem;
            margin: 0 auto;
            width: 60%;
        }
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
            width: 50%;
        }

        .search-bar {
            

            .search-bar-content {

                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                border: 0.5px solid var(--btnBgColor);
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80%;
            }
            position: relative;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
            background-color: white;

            button[type="submit"] {
                width: 20%;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }

            div[class^=" css"] {
                flex: 30%;
                box-shadow: none;
            }
           
            input[type="text"] {
                flex: 50%;
                margin: 0;
            }

            div, input[type="text"] {
                border: none;
            }
        }
    }

    .search-matches-input {
        border-radius: 4px;
        background-color: whitesmoke;
        max-height: 200px;
        width: 100%;
        overflow-y: scroll;
        opacity: 0.8;
        position: absolute;
        /* z-index: 2; */
        top: 5.4rem;

       /* width */
        ::-webkit-scrollbar {
        width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        }
        
        ::-webkit-scrollbar-thumb {
        background-color: var(--btnBgColor); 
        border-radius: 4px;
        }

        li {
            list-style: none;
            padding: 1rem;
            cursor: pointer;
            font-weight: bolder;
        }

        li:hover {
            background-color: var(--btnBorder);
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
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin: 1.5rem auto 0 auto;
        max-width: 1000px;
        min-width: 300px;
        /* min-height: 43vh; */
        height: 44vh;
        align-content: flex-start;

    }


    .card-item {
   
        text-align: center;
        background-color: #fff;
        border-radius: 4px;
        border: 4px solid var(--generalColor);
        box-shadow: 1px 1px 2.5px grey;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: var(--btnBgColor);
        transition: all .2s ease-in-out;
        cursor: pointer;
        
        div {
            flex: 70%;
            text-align: left;
        }

        h4 {
            font-size: .8rem;
        }
        
        p{
            text-shadow: 1px 1px 2px #ddd;
            font-weight: bolder;
            font-size: 2.5rem;
            /* margin: 1rem auto; */
            flex: 30%;
            text-align: left;
        }

        span {
            font-size: 1rem;
        }

        .one-more-tone {
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

        /* form {width: 100%} */
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
