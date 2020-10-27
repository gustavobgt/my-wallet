import React from 'react';

import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp } from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha carteira" />
                <Title>Minha carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp /> 
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
};

export default Aside;
