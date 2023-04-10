import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import {mobile} from '../responsive';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';


const Container = styled.div`
    height:60px;
    ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding:"10px 0px", width:"100%"})}


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
    ${mobile({display:"none"})}

`;
const SearchContainer = styled.div`
    border:1px solid black;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    ${mobile({marginLeft:"8px"})}



`;
const Input = styled.input`
border:none;
outline: 0;
${mobile({width:"50px"})}



`;
const Center = styled.div`
flex:1;
text-align:center;
${mobile({})}


`;

const Logo = styled.h1`
font-weight:bold;
color:#EC407A;
${mobile({fontSize:"12px",marginLeft:"14px"})}






`
const Right = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content:flex-end;
/* ${mobile({flex:2, justifyContent: "center"})}; */
${mobile({flex:2,justifyContent:"center"})}

`;

const MenuItem = styled.div`
    font-size:15px;
    cursor:pointer;
    margin-left:25px;
    font-weight:bold;
${mobile({ fontSize:"12px" , marginLeft: "13px"})}
`


const Navbar = () => {
    let navigate=useNavigate()
    const routeLogin = () => { 
        let path = `/login`; 
        navigate(path);
      }
      const routeRegister = () => { 
        let path = `/register`; 
        navigate(path);
      }
      const routeCart = () => { 
        let path = `/cart`; 
        navigate(path);
      }

    //   const[state,setState]=useState(0)

    //   const increment=()=>{
    //     setState(state+1)
    //   }

    //   const decrement=()=>{
    //     setState(state-1)
    //     if(state<=1){
    //         setState(1);
    //     }
    //   }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: "16px" }}></Search>
                    </SearchContainer>
                </Left>
                <Center><Logo>FAIRY CLOSET</Logo></Center>
                <Right>
                    <MenuItem onClick={routeRegister}>REGISTER</MenuItem>
                    <MenuItem onClick={routeLogin}>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge onClick={routeCart}  badgeContent={2} color="primary">
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>

                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar