import styled from 'styled-components';

export const Center = styled.div`
    max-width: 1366px;
    width: 90%;
    margin: 0 auto;
    
`;

export const Container = styled.section`
    padding: 0 0 9rem 0;
`;


export const Title = styled.h3`
    font-size: 30px;
    text-align: center;
    padding: 40px;
`;

export const Button = styled.button`
    color: white;
    border: none;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
    background: #14aa4b;
    width: 285px;
    height: 38px;
    font-size: 21px;
`;

export const InputFilter = styled.input`
    padding: 8px;
    width: 50%;
    height: 41px;
    font-size: 19px;
    border-radius: 5px;
    border: none;
`;




export const Content = styled.div`

.form-box{
    display: flex;
    margin-top: 50px;
    margin-bottom: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-box form{
    background: #fff;
    padding: 12px;
    width: 100%;
    border-radius: 5px;
    margin-top: 15px;
}
.form-box form label{
    margin-bottom: 15px !important;
}

.form-box form input, .form-box form select{
    height: 28px;
    width: 50%;
}
.danger-error{
    color: #790404;
    font-weight: 600;
}
`;

export const ContentAdd = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;

    .form-box{
        width: 50% !important;
    }
    .form-add div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .button{
        color: white;
        border: none;
        padding: 7px 17px 7px 20px;
        border-radius: 6px;
        margin-right: 10px;
        cursor: pointer;
    }

    .edit{
        background: #14aa4b;
    }
    input{
        font-size: 16px;
    }
`;

export const ContentWrapper = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 1000px){
            flex-wrap: wrap;
        }
`;


export const ContentRight = styled.div`
    flex: 0 0 63%;

    @media screen and (max-width:1000px){
        flex: 0 0 100%
    }
`;

export const Group = styled.div`
    padding: 2rem 0;
    width: 50%;

    &:not(:last-child){
        border-bottom: 1px solid #ccc;
    }

    input[type=checkbox]{
        display: none;
        &:checked ~ div.question__box{
            display: block;
        }

        &:checked ~ label > div > svg.icon-plus{
            display: none;
        }
        &:checked ~ label > div > svg.icon-minus{
            display: block;
        }
    }

    label{
        display: flex;
        align-items: center;
        justify-content: space-between;

        cursor: pointer;

        h3{
            flex: 0 0 80%;
            font-size: 2.4rem;
            font-weight: 500;
            line-height: 3.3rem;
            color:#14aa4b !important;

            @media screen and (max-width: 768px){
                font-size: 1.6rem;
                line-height: initial;
            }
        }

        div{

            svg{
                width: 30px;
                fill: #14AA4B;

                &.icon-minus{
                    display: none;
                }
            }
        }
    }

    div.question__box{
        display: none;
        margin-top: 2rem;

        p{
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 2.4rem;
            color: #231F20;
            padding-right: 6.5rem;
        }
    }

    .button{
        color: white;
        border: none;
        padding: 7px 17px 7px 20px;
        border-radius: 6px;
        margin-right: 10px;
        cursor: pointer;
    }

    .edit{
        background: #14aa4b;
    }

    .delete{
        background: #790404;
    }
    .box-buttons{
        margin-top:20px;
    }
    input{
        font-size: 16px;
    }
`;

