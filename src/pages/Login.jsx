import styled from "styled-components"

const Container=styled.div`
   width: 100vw;
   height: 100vh;
   background :linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
   ),
  url("https://static.vecteezy.com/system/resources/previews/006/663/095/non_2x/shopping-concept-cartons-or-paper-boxes-and-shopping-bag-in-red-shopping-cart-on-pink-background-online-shopping-consumers-can-shop-from-home-and-delivery-service-with-copy-space-free-photo.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper=styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fbf0f4;
    margin-bottom: 15%;
    
`;
const Title=styled.h1`
   font-style: 24px;
   font-weight:600; 
   color:#EC407A;
`;
const Form=styled.form`
    display: flex;
   flex-direction: column;
    
`;
const Input=styled.input`
    flex: 1;
    min-width:40%;
    margin: 10px 0px;
    padding: 10px;
    font-weight: 500;
    color:#EC407A;
    border: 1px solid #EC407A ;

`;

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:#EC407A; 
    color: white;
    cursor:pointer;
    margin-bottom:10px ;
`;
const Link=styled.a`
    margin: 5x 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color:#EC407A;
    font-weight: 500;

`;
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
           
            <Button>LOGIN</Button>
            <Link>FORGET PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login