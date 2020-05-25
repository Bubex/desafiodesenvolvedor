import styled from 'styled-components'

export const Center = styled.div`
    max-width: 1366px;
    width: 90%;
    margin: 0 auto;
`;

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ContainerBanner = styled.section``;

export const ItemBanner = styled.div`
    display: flex;
    align-items: center;
    div{
        max-width: 480px;
        /* background-color: blue; */
    }
    h1{
        font-size: 56px;
        font-weight: 700;
        line-height: 60px;
        color: #231f20;
        margin-bottom: 25px;

        span{
            display: inline-block;
            position: relative;
            transition: .3s ease;

            &:hover{

                &::after{
                    transform: rotateZ(-2.5deg)
                }
            }

            &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #14aa4b;
                z-index:-1;
            }

            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
    }

    h2{
        font-size: 32px;
        font-weight: 500;
        line-height: 38px;
        color: #231f20;
        margin-bottom: 25px;
    }

    h3{
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        color: #231f20;

        span{
            display: block;
        }
    }

    img{
        flex: 1;
    }
`;

export const ItemBannerList = styled.div`
    flex: 1;
    h3{
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        color: #231f20;
        margin-bottom: 28px;

        span{
            display: block;
        }
    }

    p{
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        color: #231f20;
        margin-bottom: 26px;
    }

    ul{
        list-style: none;
    }

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 10px;

        &:first-child{
            border-top: 1px solid #c0c4c8;
            border-bottom: 1px solid #c0c4c8;
        }

        &:not(:first-child){
            border-bottom: 1px solid #c0c4c8;
        }

        span{
            display: block;
            flex: 1;
            font-size: 20px;
            font-weight: 600;
            line-height: 28px;
            color: #231f20;

        }

        > svg{
            margin-right: 10px;
        }
    }

`;



