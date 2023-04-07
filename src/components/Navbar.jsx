import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height:60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items:center;
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;

`;
const Language = styled.span`
    font-size:15px;
    cursor:pointer;
    font-weight:bold;
`;
const SearchContainer = styled.div`
    border:1px solid black;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;

`;
const Input = styled.input`
border:none;

`;
const Center = styled.div`
flex:1;
text-align:center;
`;

const Logo = styled.h1`
font-weight:bolder;
color:#EC407A;





`
const Right = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content:flex-end;
`;

const MenuItem = styled.div`
    font-size:15px;
    cursor:pointer;
    margin-left:25px;
    font-weight:bold;




`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: "16px" }}></Search>
                    </SearchContainer>
                </Left>
                <Center><Logo>FAIRY CLOSET</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>

                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar