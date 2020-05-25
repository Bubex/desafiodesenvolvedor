import React, { Component } from 'react'

import {
    ContentHeader,
    Center,
    Container,
    ContainerWrapper,
    Logo,
    Navigation
} from './style'


class Header extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <ContentHeader >
                <Container id="header">
                    <Center>
                        <ContainerWrapper>
                            <Logo href="#" id="logo">

                            </Logo>
                            <Navigation>
                                <ul>
                                    <li>
                                        <a className="menu-link" href="#" >Home</a>
                                    </li>

                                    <li>
                                        <a href="https://github.com/ThailanHigor/"
                                            target="blank"
                                            className="nav-button">GitHub</a>
                                    </li>
                                </ul>
                            </Navigation>
                        </ContainerWrapper>
                    </Center>
                </Container>

            </ContentHeader>
        )
    }
}

export default Header;
