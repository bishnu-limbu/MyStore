import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import {mobile} from '../responsive'
// hovering effect on props


const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
/* background-size: 100% 100%; */
transition:all 1.5s ease;
cursor:pointer;
/* ${mobile({width:"320px"})} */



`;


const Container = styled.div`
flex:1;
margin:10px;
height:70vh;
position:relative;
&:hover ${Image}{
    transform: scale(1.4);
}
/* ${mobile({width:"100%",display:"flex",flexDirection:"column"})} */



`;
const Imgcontainer=styled.div`
  overflow: hidden;
    height: 100%;
${mobile({width:"320px",display:"flex",flexDirection:"column",flexWrap:"wrap"})}


`;

const Info = styled.div`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;



`;
const Title = styled.h2`
color:white;
margin-bottom:20px;
`;
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;

`;

// 3rd part
const CategoryItem = ({item}) => {
    let navigate=useNavigate()
    const routeproductlist = () => { 
        let path = `/productlist`; 
        navigate(path);
      }
    return (
        <Container>
            
            <Imgcontainer>
            <Image src={item.img}></Image>
            </Imgcontainer>
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={routeproductlist}>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem