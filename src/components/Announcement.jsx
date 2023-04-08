import styled from "styled-components"
import {mobile} from '../responsive'

const Container = styled.div`
height:30px;
background-color:#EC407A;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;
    ${mobile({width:"615px"})}




`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over Rs.5000
    </Container>
  )
}

export default Announcement