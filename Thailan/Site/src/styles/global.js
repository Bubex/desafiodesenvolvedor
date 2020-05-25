import { createGlobalStyle } from 'styled-components'
import "circular-std";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    input,button{
        outline: 0;
        box-sizing: border-box;
        font-family: CircularStd;
    }


    html{
        font-size: 56.25%;
    }

    body{
        font-size: 1.6rem;
        background-color: #F0F5FA;
        font-family: CircularStd;
        /* overflow-x: hidden; */
    }

    p{
        font-family: CircularStd;
    }

    .show{
        transform: translateX(0)!important;
    }
`;
