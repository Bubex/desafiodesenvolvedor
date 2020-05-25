import React, { Component } from 'react'

import {
    FaFacebookSquare,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'

import {
    Center,
    Container,
    ContainerWrapper,
    FooterWrapper,
    FoorterContent,
    FooterImage,
    FooterSingle,
    Copyright,
    CopyrightWrapper,
    CopyrightLeft,
    CopyrightRight,
    SocialMedia
} from './style'


class Footer extends Component {
    render() {
        return (
            <>
                    <Container id="contato">
                        <ContainerWrapper>
                            <FooterImage />
                            <FoorterContent>
                                <Center>
                                    <FooterWrapper>
                                        <FooterSingle>
                                            <h2>Endpoints da API</h2>
                                            <div>
                                                <p>Todos os usuários</p>
                                                <h3><a> GET - /api/users</a></h3>
                                            </div>
                                            <div>
                                                <p>Obter usuário por id</p>
                                                <h3><a>GET -  /api/users/[id]</a></h3>
                                            </div>
                                            <div>
                                                <p>Criar usuário</p>
                                                <h3><a>POST - /api/users</a></h3>
                                            </div>
                                            <div>
                                                <p>Atualizar usuário</p>
                                                <h3><a>PUT - /api/users/[id]</a></h3>
                                            </div>
                                            <div>
                                                <p>Deletar usuário</p>
                                                <h3><a>DELETE - /api/users/[id]</a></h3>
                                            </div>

                                        </FooterSingle>
                                    </FooterWrapper>
                                </Center>
                            </FoorterContent>
                        </ContainerWrapper>
                        <Copyright>
                            <Center>
                                <CopyrightWrapper>
                                    <CopyrightLeft>
                                        <div>
                                          
                                        </div>
                                        <div>
                                            <p>
                                                Projeto desenvolvido para o teste do empresa City Connect
                                            <span>
                                                    Desenvolvido por: Thailan Higor
                                            </span>
                                            </p>
                                        </div>
                                    </CopyrightLeft>
                                    <CopyrightRight>
                                        <SocialMedia>
                                            <ul>
                                                <li>
                                                    <a href="https://www.linkedin.com/in/thailan-higor/" target="blank">
                                                        <FaLinkedin size={32} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </SocialMedia>
                                    </CopyrightRight>
                                </CopyrightWrapper>
                            </Center>
                        </Copyright>
                    </Container>
               
            </>
        )
    }
}

export default Footer;
