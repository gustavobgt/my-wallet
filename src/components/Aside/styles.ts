import styled from 'styled-components';

const Container = styled.div`
    grid-area: AS;

    background-color: ${(props) => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 40px;
`;

const Title = styled.h3`
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
`;

const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
`;

const MenuItemLink = styled.a`
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;

    margin: 7px 0px;
    display: flex;
    align-items: center;

    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink };
