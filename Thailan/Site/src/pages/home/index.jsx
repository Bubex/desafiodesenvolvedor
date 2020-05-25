import React, { Component } from 'react';

//Importando Components
import Header from '../../components/header'
import Footer from '../../components/footer'
import Users from './partial/Users'


class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Users />
                <Footer />
            </>
        )
    }
}

export default Home;
