import styled from "styled-components"
import {categories} from "../data"
import CategoryItem from "./CategoryItem";
import {mobile} from '../responsive'

const Container=styled.div`
display:flex;
padding:20px;
justify-content:space-between;

${mobile({width:"80%"})};

`;
const Heading=styled.h1`
  /* background-color:#EC407A; */
  background-image: linear-gradient(to right,#a8d7f4, #fc2aac);
  
  text-align: center;
  padding-top:20px;
  font-weight: bolder;
  color: black;

`;
// 3rd part
const Categories = () => {
  return (
    <Heading>CATEGORIES
    <Container>
    
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
    </Heading>
  )
};

export default Categories