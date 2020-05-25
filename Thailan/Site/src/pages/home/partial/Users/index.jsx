import React, { Component } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'


import {
    Center,
    Container,
    Content,
    ContentWrapper,
    Group,
    Title,
    Button,
    ContentAdd,
    InputFilter
} from './styles'

import axios from 'axios';
import moment from 'moment';
import InputMask from 'react-input-mask';
import 'moment-timezone';
moment.locale('pt-br');
class Question extends Component {
    state = {
        users: [],
        usersFiltered: [],
        id: 0,
        Nome: "",  
        DataNascimento:"",
        Sexo: 0,
        is_editing: false,
        is_adding:false,
        erro: false,
        Search: ""
    }

    handleAll(){
        axios.get(`http://localhost:8000/api/users`)
        .then(res => {
            this.setState({ users: res.data, usersFiltered: res.data });
        })
    }

    componentDidMount() {
        this.handleAll();
    }

    handleDelete(id){
        axios.delete(`http://localhost:8000/api/users/${id}`)
        .then(res => {
            this.handleAll();
        });
       
    }

    handleEdit = user =>{
        this.setState({
            is_editing: true,
            is_adding: false,
            id: user.id
        })
    }

    handleNew = () =>{
        this.setState({
            is_editing: false,
            is_adding: true
        })
    }
    
    handleAddSubmit = evt => {
        evt.preventDefault();

        var newDate = moment(this.state.DataNascimento,"DD-MM-YYYY").format('YYYY-MM-DD');
        axios.post(`http://localhost:8000/api/users/`, {
            Nome: this.state.Nome,
            DataNascimento: newDate,
            Sexo: this.state.Sexo
        }).then(res => {
            
            this.handleAll();
            this.setState({
                Nome: "",  
                DataNascimento:"",
                Sexo: 0,
                is_editing: false,
                is_adding: false,
                erro: false
            })
        })
        .catch(error => {
            this.setState({
                erro: true,
            })
        });
    }

    handleEditSubmit = evt =>{
        evt.preventDefault();

        var newDate = moment(this.state.DataNascimento,"DD-MM-YYYY").format('YYYY-MM-DD');
        axios.put(`http://localhost:8000/api/users/${this.state.id}`, {
            Nome: this.state.Nome,
            DataNascimento: newDate,
            Sexo: this.state.Sexo
        }).then(res => {
            
            this.handleAll();
            this.setState({
                Nome: "",  
                DataNascimento:"",
                Sexo: 0,
                is_editing: false,
                erro: false
            })
        })
        .catch(error => {
            this.setState({
                erro: true,
            })
        });
    }

    myChangeHandler = (evt) => {
        let nam = evt.target.name;
        let val = evt.target.value;
        this.setState({[nam]: val});
    }
    handleFilter = (evt) => {
        let search = evt.target.value;
        let usersFilter = this.state.users
        usersFilter = usersFilter.filter((user) => {
          return user.Nome.toLowerCase().indexOf(
            search.toLowerCase()) !== -1
        })

        this.setState({
            usersFiltered: usersFilter
        });
    }

    formEdit = (user) =>(
        <div className="form-box">
            <h3>Editar Usuário </h3>
            <form onSubmit={this.handleEditSubmit}>
            <label>
                <input type="hidden" name="id" value={user.id}/>
                Nome: <input type="text"  name="Nome" onChange={this.myChangeHandler} />
            </label>

            <label>
                Data de Nascimento:
                <InputMask  type="text" mask="99/99/9999" maskChar="" name="DataNascimento" onChange={this.myChangeHandler} />
            </label>  

            <label>
                Sexo: 
                <select name="Sexo" onChange={this.myChangeHandler}>
                    <option value="0">Feminino</option>
                    <option value="1">Masculino</option>
                </select>
            </label>  

            <button type="submit" className="button edit">Salvar</button>
            {
                this.state.erro 
                ?  <span className="danger-error">Erro ao Salvar</span>
                : ""
            }                 
        </form>
    </div>
    )

    formAdd = () =>(
        <div className="form-box form-add">
            <form onSubmit={this.handleAddSubmit}>
            <div>
                <label> Nome:</label>
                <input type="text"  name="Nome" onChange={this.myChangeHandler} />
            </div>

            <div>
                <label> Data de Nascimento:</label>
                <InputMask  type="text" mask="99/99/9999" maskChar="" name="DataNascimento" onChange={this.myChangeHandler} />
            </div>  

            <div>
                <label> Sexo: </label>
                <select name="Sexo" onChange={this.myChangeHandler}>
                    <option value="0">Feminino</option>
                    <option value="1">Masculino</option>
                </select>
            </div>  

            <button type="submit" className="button edit">Salvar</button>
            {
                this.state.erro 
                ?  <span className="danger-error">Erro ao Salvar</span>
                : ""
            }                 
        </form>
    </div>
    )

    renderItem = (user) => (
        <Group key={user.id}>
            <input type="checkbox" id={user.id} />
            <label htmlFor={user.id}>
                <h3>{user.id} - {user.Nome} </h3>
                <div>
                    <AiOutlinePlusCircle size={35} className="icon-plus" />
                    <AiOutlineMinusCircle size={35} className="icon-minus" />
                </div>
            </label>
            <div className="question__box">
                <p><b>Data de Cadastro:</b> {moment(new Date(user.DataCadastro)).format('DD/MM/YYYY')}</p>
                <p><b>Data de Nascimento:</b> {moment(new Date(user.DataNascimento)).format('DD/MM/YYYY')}</p>
                <p><b>Sexo:</b> {(user.Sexo === 0 ? "Feminino" :"Masculino")}</p>
                <p><b>Ultima Atualização:</b> {user.DataAtualizacao != null ? moment(new Date(user.DataAtualizacao)).format('DD/MM/YYYY') : ""}</p>
                <div class="box-buttons">
                    <button onClick={() => this.handleEdit(user)} className="button edit" >Editar</button>
                    <button onClick={() => this.handleDelete(user.id)} className="button delete">Deletar</button>
                </div>

                {this.state.is_editing 
                    ? this.formEdit(user)
                    : null
                }
            </div>
        
        </Group> 
    )

    render() {
        return (        
            <Container>
                <Content>
                    <Center>
                    <Title>Usuários Cadastrados</Title>
                        <ContentAdd>
                            <Button onClick={() => this.handleNew()} className="button edit" >Novo Usuário</Button>
                            {this.state.is_adding 
                                ? this.formAdd()
                                : null
                            }
                        </ContentAdd>
                        <ContentWrapper>
                            <InputFilter type="text"  placeholder="Filtrar usuários" name="Search" onChange={this.handleFilter} />
                            { this.state.usersFiltered.map(user => this.renderItem(user))} 
                        </ContentWrapper>
                    </Center>
                </Content>
            </Container>               
        )
    }
}

export default Question;
