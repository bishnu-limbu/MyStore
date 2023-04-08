
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons';

const Container=styled.div`
    
`;
const Wrapper=styled.div`
   padding: 20px; 
`;
const Title=styled.h1`
   font-weight: 500;
   text-align: center;
   color:#EC407A;
`;
const Top=styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
    color:#EC407A;
`;
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${(props)=>props.type==="filled" && "none"};
    background-color:${(props)=>props.type==="filled" ? "#EC407A " : "transparent"};
    color:${(props)=>props.type==="filled" && "white"};

`;
const TopTexts=styled.div`
     font-weight: 500;
`;
const TopText=styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  
`;
const Bottom=styled.div`
  display: flex;
  justify-content: space-between;
  color:#EC407A;
  font-weight: 500;
`;
const Info=styled.div`
  flex:3;
  
`;
const Product=styled.div`
 display: flex;
 justify-content:space-between ;
 
`;
const ProductDetail=styled.div`
   flex:2; 
   display: flex;
`;
const Image=styled.img`
    width: 200px;
    margin: 10px;
`;
const Details=styled.div`
  padding: 20px;  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName=styled.span`
    
`;
const ProductId=styled.span`
    
`;
const ProductColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius:50% ;
  background-color: ${(props)=>props.color};
`;
const ProductSize=styled.span`
    
`;
const PriceDetail=styled.div`
  flex:1;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
`;
const Hr=styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
`;
const Summary=styled.div`
  flex:1;
  border:2px solid #EC407A;
  border-radius: 10px;
  padding: 20px;
  height: 45vh;
  
`;
const SummaryTitle=styled.h1`
font-weight: 400;
`;
const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "500"};
font-size: ${props=>props.type==="total" && "24px"};


  
`;
const SummaryItemText=styled.span`

  
`;
const SummaryItemPrice=styled.span`

`;
const Button=styled.button`
width: 100%;
padding: 10px;
background-color: #EC407A;
color: white;
border: none;
font-weight: 600;
  
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled" >CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>

                    <Product>
                        <ProductDetail>
                           <Image src="https://ae01.alicdn.com/kf/Sd7b2e4dbf8cf4c7d84814b380ec8915ef/2022-Summer-Women-S-Dress-Korean-Style-Temperament-School-Flower-Heroine-Back-Bow-Short-Sleeved-Fashion.jpg"/> 
                           <Details>
                            <ProductName><b>Product:</b> Korean Black Dress</ProductName>
                            <ProductId><b>ID:</b> 93813718293</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>M</ProductSize>
                           </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs.2500</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                           <Image src="https://cdn.shopify.com/s/files/1/0575/5433/7942/products/korean-outfit-womens-suit_1200x1200.jpg?v=1627279714"/> 
                           <Details>
                            <ProductName><b>Product:</b> Korean Blazer Set</ProductName>
                            <ProductId><b>ID:</b> 93813718294</ProductId>
                            <ProductColor color="gray"/>
                            <ProductSize><b>Size:</b>M</ProductSize>
                           </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs.3200</ProductPrice>
                        </PriceDetail>

                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal:</SummaryItemText>
                        <SummaryItemPrice>Rs.5700</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Cost:</SummaryItemText>
                        <SummaryItemPrice>Rs.100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount:</SummaryItemText>
                        <SummaryItemPrice>Rs.0</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total:</SummaryItemText>
                        <SummaryItemPrice>Rs.5800</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>

            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart