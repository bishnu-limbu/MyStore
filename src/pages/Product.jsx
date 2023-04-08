import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"

const Container=styled.div`

`;
const Wrapper=styled.div`
padding:50px;
display:flex;

`;
const ImgContainer=styled.div`
flex:1;

`;

const Image=styled.img`
  width: 100%;
  height: 90vh;
  object-fit:cover;

`;
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
`;
const Title=styled.h1`
    font-weight:bold;
    color:#EC407A;
    /* font-style:italic; */

`;
const Desc=styled.p`
    margin:20px 0px;  
    color:#EC407A;
    /* font-style:italic; */

`;
const Price=styled.span`
font-weight: 300;
font-size:40px;
color:#EC407A;
    
`;
const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    color:#EC407A;


`;

const Filter=styled.div`
    display:flex;
    align-items: center;

`;

const FilterTitle=styled.span`
    font-size: 20px;
    font-weight:400;

`;

const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${props=>props.color};
    margin:0px 5px;
    cursor: pointer;
`;
const FilterSize=styled.select`
    background-color:#EC407A;
    color:white;
    border:none;
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption=styled.option`
    background-color: black;


`;
const AddContainer=styled.div`
width: 50%;
  display:flex;
  justify-content: space-between;
  align-items: center;
`;
const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #EC407A;
`;
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px ;
    border: 1px solid #EC407A;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;
    color: #EC407A;
`;
const Button=styled.button`
padding: 15px;
border: 2px solid #EC407A;;  
background-color: white;
cursor: pointer;
font-weight: 500;
color: #EC407A;

&:hover{
    background-color:#f8f4f4 ;
}

`;
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://cf.shopee.com.my/file/ef401628c4e2945bdc332ead67b48533"/>
            </ImgContainer>
        <InfoContainer>
            <Title>Formal Pant</Title>
            <Desc>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quidem? Nam fuga quis rem, accusamus reiciendis officiis esse cumque cum.

                
            </Desc>
            <Price>
                Rs.1400
            </Price>
            <FilterContainer>

                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="#FCF0C6" />
                    <FilterColor color="brown"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>

            </FilterContainer>
            <AddContainer>

                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>

                <Button>ADD TO CART</Button>

            </AddContainer>
        </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product