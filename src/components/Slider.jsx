import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from 'styled-components'
import {sliderItems} from "../data"
import {mobile} from '../responsive'

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;



`;
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#FFEBEE;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:80px;
left:${props => props.direction === "left" && "20px"}; 
right:${props => props.direction === "right" && "20px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`;
// left/right

const Wrapper = styled.div`
height:100%;
display:flex;
transform:translateX(${props=>props.slideIndex * -100}vw);
transition:all 1.5s ease;
`;

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg};
${mobile({width:"615px"})}

`;


const ImgContainer = styled.div`
height:100%;
flex:1;
margin-top:60px;

`;

const Image = styled.img`
height:80%;




`;

const InfoContainer = styled.div`
flex:1;
padding:50px;

`;

const Title = styled.h1`
font-size:70px;
`;

const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`;

const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`;





const Slider = () => {

        const[slideIndex,setSlideIndex]=useState(0);
    // Nested arrow func for handling click event
        const handleClick=(direction)=>{

          if(direction==="left")  {
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2);
          }else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0);
          }
        };

    return (
        <Container>
                                            {/* function with parameters name= handleClick("left")*/}
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                    <Slide bg={item.bg} key={item.id} >
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                    ))}

            </Wrapper>
                                                {/* function with parameters name= handleClick("right")*/}
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider