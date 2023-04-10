import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from '../responsive'

const Container = styled.div`
display:flex;
flex-wrap: wrap;
${mobile({width:"50px"})}

`;

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Logo=styled.h1`
color:#EC407A;

`;

const Desc=styled.p`
margin:20px 0px;
color:#EC407A;
`;

const SocialContainer=styled.div`
display:flex;


`;

const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:15px;


`;

const Center = styled.div`
flex:1;
padding:20px;

`;

const Title=styled.h3`
margin-bottom:8px;
color:#EC407A;
`; 

const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
color:#EC407A;
${mobile({display:"grid",gridTemplateColumns:"100% 100%"})}

`; 
const ListItem=styled.li`
width:50%;
margin-bottom:10px;
${mobile({width:"100%"})}

`; 
const Right = styled.div`
flex:1;
padding:20px;
`;

const ContactItem=styled.div`
color:#EC407A;
margin-bottom:20px;
display:flex;
align-items:center;
`;

const Payment=styled.img`
color:#EC407A;
width:40%;
height:80px;
${mobile({width:"100%"})}

`;


const Footer = () => {
    return (
        <Container>
            <Left>

                <Logo>FAIRY CLOSET</Logo>
                <Desc>
                    Fashionable and trendy looks for you. Not just fashion, but the design. Amazing designs for a better-looking you.  Make your look more astounding.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>

            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>


            </Center>

            <Right>
                <Title>Contact</Title>

                <ContactItem><Room style={{marginRight:"10px"}}/>Sorakhuttey, Kathmandu</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>9779844673255</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/> fairycloset@gmail.com</ContactItem>

                <Title>Payment</Title>
                <Payment src="https://www.weblinknepal.com/ckfinder/userfiles/images/Online-Payment-Gateway.jpg"/>
                
                
            </Right>
        </Container>
    )
}

export default Footer