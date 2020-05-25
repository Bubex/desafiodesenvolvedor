import styled from 'styled-components'
import logo from '../../assets/images/logo.png';

export const Center = styled.div`
    max-width: 1366px;
    width: 90%;
    margin: 0 auto;
`;

export const ContentHeader = styled.header`
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
`;

export const Container = styled.div`
    padding: 2rem 0;
    position: relative;
`;

export const ContainerWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    width: 50px;
    height:70px;
    background-image: url(${logo});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Navigation = styled.nav`

    > svg{
        color: #231f20;
        display: none;

        @media screen and (max-width: 1000px){
            display:block;
        }

    }

    ul{
        display: flex;
        align-items: center;

        list-style: none;

        @media screen and (max-width:1000px){
            position: absolute;
            top: 75px;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #F0F5FA;
            display: block;
            transition: .5s ease;
            transform: translateX(100%);
            overflow-y: auto;
            padding-bottom: 120px;
        }


        li{
            /* border: 1px solid #000; */
            &:not(:last-child){
                margin-right: 2.4rem;

                @media screen and (max-width: 1000px){
                    margin-right: 0;
                }
            }

            a{
                display: block;
                text-decoration: none;
                font-size: 1.5rem;
                font-weight: 500;
                line-height: 2rem;
                color: #14aa4b;
                transition: .3s ease;
                border-bottom: 3px solid transparent;
                padding: 1rem 0;

                @media screen and (max-width: 1000px){
                    padding: 2.5rem 0;
                    text-align: center;
                    border-bottom: 1px solid #ccc;
                    color: #14aa4b;
                }

                &:hover{
                    border-bottom: 3px solid #14aa4b;;

                    @media screen and (max-width: 1000px){
                        border-bottom: 3px solid transparent;
                    }
                }

                &.nav-button{
                    display: block;
                    padding: 1.4rem 0rem;
                    border-radius: 28px;
                    font-size: 1.5rem;
                    font-weight: 400;
                    width: 200px;
                    text-align: center;
                    -webkit-transition: .3s ease;
                    transition: .3s ease;
                    background-color: #fff;
                    color: #14aa4b;
                    border: 0;

                    &:hover{
                        background-color: #000000c2;
                        border: 0;
                        color: #fff;
                    }

                    @media screen and (max-width: 1000px){
                        margin: 4rem auto 0;
                    }
                }
            }
        }
    }
`;
