import styled from "styled-components"

const Container=styled.div`
   width: 100vw;
   height: 100vh;
   background :linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
   ),
  url("https://static.vecteezy.com/system/resources/previews/002/006/605/original/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper=styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fbf0f4;
    
`;
const Title=styled.h1`
   font-style: 24px;
   font-weight:600; 
   color:#EC407A;
`;
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
    
`;
const Input=styled.input`
    flex: 1;
    min-width:40%;
    margin: 20px 15px 0px 0px;
    padding: 10px;
    font-weight: 500;
    color:#EC407A;
    border: 1px solid #EC407A ;

`;
const Aggreement=styled.span`
    font-style: 12px;
    margin: 20px 0px;
    color:#EC407A;
`;
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:#EC407A; 
    color: white;
    cursor:pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE MY ACCOUNT</Title>
            <Form>
                <Input placeholder="first Name"/>
                <Input placeholder="lastname"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Aggreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Aggreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register