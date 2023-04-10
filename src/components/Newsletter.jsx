import { Send } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from '../responsive'





const Container=styled.div`
height:60vh;
background-color:#fbf0f4;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;



`;
const Title=styled.h1`
    font-size:70px;
    margin-bottom:20px;
    color:#EC407A;
${mobile({fontSize:"30px"})}



`;

const Desc=styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
color:#EC407A;
${mobile({fontSize:"20px",textAlign:"center"})}




`;
const Button=styled.button`
flex:1;
background-color:#EC407A;
color:#fbf0f4;
border:none;
cursor:pointer;
/* ${mobile({border:"none"})} */


`;
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid  #EC407A;
${mobile({border:"0.1px solid  #EC407A",width:"70%"})}

&:hover ${Button}{
    background-color:#ba1c51;
    color:#f8bacf;
}

`;

const Input=styled.input`
border:none;
flex:8;
padding-left:15px;
outline: 0;

${mobile({border:"1px solid #EC407A "})}

`;







const Newsletter = () => {
  return (
  <Container>
    <Title>Newsletter</Title>
    <Desc>Get timely updates from your favorite products.</Desc>
    <InputContainer>
       <Input placeholder="Your email"/> 
        <Button>
            <Send/>
        </Button>
    </InputContainer>
  </Container>
  )
}

export default Newsletter