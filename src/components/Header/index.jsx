import React from "react";
import {Button} from '../Button'
import logo from '../../assets/logo.png'
import {
    BuscarInpuntContainer,
    Container,
    Row,
    Wrapper,
    Menu,
    MenuRight,
    Input
} from './styles'

const Header = () => { 
    return( 
        <Wrapper> 
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" />
                    <BuscarInpuntContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInpuntContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row> 
                
                <Row>
                    <MenuRight href="#">Home</MenuRight>    
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </Row>    
            </Container>    
        </Wrapper>
    )
}
export {Header}