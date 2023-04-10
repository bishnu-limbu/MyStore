import styled from "styled-components"
import { useForm } from 'react-hook-form'


const Container = styled.div`
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
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fbf0f4;
    
`;
const Title = styled.h1`
   font-style: 24px;
   font-weight:600; 
   color:#EC407A;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    
`;
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin: 20px 15px 0px 0px;
    padding: 10px;
    font-weight: 500;
    
    border: 1px solid #EC407A ;
    /* cursor: pointer; */

`;
const Aggreement = styled.span`
    font-style: 12px;
    margin: 20px 0px;
    color:#EC407A;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:#EC407A; 
    color: white;
    cursor:pointer;
`;

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);

    }
    console.log(errors)
    return (
        <Container>
            <Wrapper>
                <Title>CREATE MY ACCOUNT</Title>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Input placeholder="firstname"{...register("fname", {
                        required: "First Name is Required",
                        minLength: {
                            value: 3,
                            message: "Name must be at least of 3 characters"

                        }
                    })} />
                    {errors.fname && (<div>{errors.fname.message}</div>)}

                    <Input placeholder="lastname" {...register("lname", {
                        required: "Last Name is Required",
                        minLength: {
                            value: 3,
                            message: "Name must be at least of 3 characters"


                        }
                    })} />
                    {errors.lname && (<div>{errors.lname.message}</div>)}

                    <Input placeholder="username"{...register("username", {
                        required: "User Name is Required",
                        pattern: {
                            value: /^[a-z]+[0-9]/,
                            message: "Username must start with lowercase alphabets and contain number"
                        }
                       

                        })} />
                    {errors.username && (<div>{errors.username.message}</div>)}

                    <Input placeholder="email" {...register("email", {
                        required: "Email is Required",
                        pattern: {
                            value: /^[a-zA-Z][a-zA-Z_.0-9]*[@][a-zA-Z]+[.][a-zA-Z]+$/i,
                            message: "Invalid email address"
                        }
                    })} />
                    {errors.email && (<div>{errors.email.message}</div>)}

                    <Input placeholder="password"
                        {...register("password", {
                            required: "Password is Required",
                            pattern: {
                                value: /[a-zA-Z0-9]{/,
                                message: "Password must be "
                            },
                            min: {
                                value: 8,
                                message: "Required at least 8 digits"
                            }
                            // pattern:{
                            //     value:/[0-9]/,
                            //     message:"Required at least one number"
                            // },
                            // pattern:{
                            //     value:/[A-Z]/,
                            //     message:"Required at least one upercase alphabet"
                            // },
                            //  pattern:{
                            //     value:/[!@#$\-_.%]/,
                            //     message:"Required at least one special character    ",

                            // }



                        })}
                    // onKeyUp={()=>{
                    //     trigger("password");
                    // }}
                    />
                    {errors.password && (<div>{errors.password.message}</div>)}
                    <Input placeholder="confirm password"
                        {...register("cpassword", { required: "confirm     password is Required" })} />
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