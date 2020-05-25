import styled from 'styled-components';

import footerImage from '../../assets/images/bg.png'

export const Center = styled.div`
    max-width: 1366px;
    width: 90%;
    margin: 0 auto;
`;

export const Container = styled.footer`

`

export const ContainerWrapper = styled.div`
    display: flex;
    background-color: #fff;
    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
    }
`;

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 0px;

    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 1280px){
        width: 100%;
        grid-gap: 1rem;
    }

    @media screen and (max-width:768px){
        grid-template-columns: repeat(1,1fr);
        grid-gap: 3rem;
    }
`;

export const FooterImage = styled.div`
    flex: 0 0 32%;
    background-image: url(${footerImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 1000px){
        flex: 0 0 100%;
        height: 524px;
    }

    @media screen and (max-width: 600px){
        height: 300px;
    }
`;

export const FoorterContent = styled.div`
    flex: 1;
    padding: 9rem 0;
    background-color: #fff;

    @media screen and (max-width: 600px){
        padding: 5rem 0 9rem;
    }
`;

export const FooterSingle = styled.div`

    h2{
        font-size: 3.2rem;
        line-height: 3.8rem;
        margin-bottom: 2.4rem;
        color: #231f20;
    }

    div.divider{
        padding-bottom: 2rem;
        width:80%;
        border-bottom: 1px solid #C0C4C8;
    }

    div{

        &:not(:last-child){
            margin-bottom: 3rem;
        }

        p{
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 2.4rem;
            color: #231f20;
            margin-bottom: .5rem;

            span{
                display: block;
            }
        }

        h3{
            font-size: 2.4rem;
            line-height: 3.3rem;
            font-weight: 700;
            color: #14aa4b;

            @media screen and (max-width: 600px){
                font-size: 2.2rem;
                line-height: 2.7rem;
            }

            a{
                text-decoration: none;
                color: #14aa4b;
            }
        }

        > a{
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 28px;
            font-size: 1.6rem;
            font-weight: 500;
            width: 200px;
            text-align: center;
            transition: .3s ease;
            box-shadow: 0 3px 9px rgba(0,0,0,.3);
            background-color: #14aa4b;
            color: #fff;
            border: 0;
            margin-top: 6rem;
            height: 55px;

            &:hover{
                background-color: #18c758;
                border: 0;
            }

            @media screen and (max-width:600px){
                margin: 6rem auto 0;
            }
        }
    }

`;

export const Copyright = styled.div`
    background-color: #231F20;
    padding: 5rem 0;
`;

export const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:1000px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const CopyrightLeft = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width:1000px){
        flex-wrap: wrap;
        justify-content: center;
        flex: 0 0 100%;
    }

    div{

        @media screen and (max-wdith:1000px){
            flex: 0 0 100%
        }

        &:first-child{
            padding-right: 6rem;
            position: relative;

            @media screen and (max-width:768px){
                flex: 0 0 100%;
                padding-right: 0;
                margin-bottom: 2.5rem;
            }


            &:before{
                content: '';
                position: absolute;
                top: 0;
                right: 3rem;
                width: 1px;
                height: 100%;
                background-color: #C0C4C8;

                @media screen and (max-width:768px){
                    display: none;
                }
            }
        }

        svg{
            @media screen and (max-width: 1000px){
                margin: 0 auto;
                display: block;
            }
            path{
                fill: #14AA4B;
            }
        }

        p{
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 2rem;
            color: #C0C4C8;

            @media screen and (max-width:768px){
                text-align: center;
            }


            span{
                display: block;
                margin-top: .2rem;
            }
        }
    }
`;

export const CopyrightRight = styled.div`

    @media screen and (max-width: 1000px){
        flex: 0 0 100%;
    }
`;


export const SocialMedia = styled.div`

    ul{
        display: flex;
        align-items: center;

        list-style: none;

        @media screen and (max-width:1000px){
            justify-content: center;
            margin-top: 3rem;
        }

        li{

            &:not(:last-child){
                margin-right: 2rem;
            }

            a{
                text-decoration: none;

                &:hover{
                    svg {

                        path{
                            fill: #14AA4B;
                        }
                    }
                }
            }
        }
    }

    svg{

        path{
            transition: .3s ease;
            fill: #C0C4C8;
        }
    }

`;
