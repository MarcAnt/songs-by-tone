import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --bgColor: #fffcf2;
        /* --bgColor: #b5651d; */
        --generalColor: #fffcf2;
        --generalColorDark: #f6f4ec;
        --btnBgColor: #3D444B;
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
        box-shadow: 0 0 0 2px var(--btnBorder);
    }
    button:active, input[type="submit"]:active {
        /* border: 5px solid var(--btnBorder); */
        background-color: var(--btnBorder);
    }
    /* button:hover, input[type="submit"]:hover {
        box-shadow: 0 0 0 2px var(--btnBorder);
    } */

    .site-wrapper {
    
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex-grow: 1;
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
                padding-bottom: 1rem;
                font-size: 2rem;
                font-weight: bolder;
                width: 80%;
                text-shadow: 3px 3px 2px #b299cc;


                span {
                    color: var(--btnBgColor);
                }
            }

        }
        form {
            flex: 50%;
            margin: 0;

            span button {
                background-color: var(--btnBorder);
                box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
                color: var(--generalColor);
                padding: .2rem;
                margin: .2rem;
            }

            input {
                border: none;
                box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
            }

            input[type="text"]:focus {
                box-shadow: 1px 1px 0 2.5px var(--btnBgColor), 0 0 .2rem .25rem #66339950;
            }
            
            input[type="submit"] {
                border-radius: 4px;
                background-color: var(--btnBorder);
                box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
                color: var(--generalColor);
            }

            input:focus {
                border: none;

            }
        }
    }

    .song-search-container {

        /* height: 80vh; */
        section {
            padding-top: 2rem;
        }
        section p {
            text-align: center;
            font-weight: bolder;
            font-size: 2rem;
            padding: 1rem 2rem;
            margin: 0 auto;
            width: 60%;
            text-shadow: 3px 3px 2px #b299cc;
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
            
            border-radius: 4px;
            box-shadow: 1px 1px 0 2.5px var(--btnBgColor);

            .search-bar-content {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                /* border: 2px solid var(--btnBgColor); */
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80%;
                transition: box-shadow .15s ease-in-out, boder-color .15s ease-in-out;
                
            }
            
            .search-bar-content:focus-within  {
                box-shadow: 0 0 .8rem .25rem #66339950;
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
                background-color:var(--btnBorder);
                box-shadow: 1px 1px 0 2.5px var(--btnBgColor);
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
        /* height: 44vh; */
        align-content: flex-start;

    }


    .card-item {
   
        text-align: center;
        background-color: #fff;
        border-radius: 4px;
        border: 4px solid var(--generalColor);
        /* box-shadow: 1px 1px 2.5px grey; */
        box-shadow: 1px 1px 0 2.5px var(--btnBorder);
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
            margin: 1.5rem 2rem;
        }

        .form-wrapper{
            section p {
                font-size: 2rem;
            }

            form {
                span,input[type="text"] {
                    width: 80%;
                }

                

                span button[type="button"]{
                    padding: 0 .2rem;
                    font-size: .95rem;
                } 

                
            }
        }
    }

  


    @media (max-width: 768px) {
        .form-wrapper{
            section p {
                font-size: 1.5rem;
            }

            form {
                span,input[type="text"] {
                    width: 90%;
                }
                
            }
        }
    }


    @media (max-width: 480px) {
        .form-wrapper{
            flex-direction: column;

            section p {
                font-size: 1rem;
                text-align: center;
                padding-bottom: 1rem;
                margin: 0 auto;
            }
            section {
                padding-top: 2rem;
                flex:auto;
            }
            
            form {
                flex: 100%;
                width: 80%;
            }

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
