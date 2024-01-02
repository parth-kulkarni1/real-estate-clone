/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignUpFormValues } from "../../types/RegistrationTypes";

import { Input, Button, Flex} from "@chakra-ui/react";
import { FormControl, FormLabel, Box } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import {useForm, FieldErrors} from 'react-hook-form'

export const Signup = () => {

    const form = useForm<SignUpFormValues>()

    const {
        register, 
        handleSubmit,
        reset,
        formState
    } = form

    const {
        errors,
        isDirty,
        touchedFields,
        dirtyFields,
        isValid,
        isSubmitting,
        isSubmitted,
        isSubmitSuccessful,
        submitCount,
      } = formState;
    



    const onSubmit = (data: SignUpFormValues ) => {
        console.log('Form sumbitted', data)
    }

    return(

        <div>

            <Heading textAlign="center" mt={5}> Agent Registration Form</Heading>

        <Flex
        width="100vw"
        height="100vh" // Full viewport height
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
        >  

            <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            height="55vh"
            width="55vw"
            >

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" placeholder="Enter your email" id = "email" {...register("email", {
                            required: "Email is required",
                            pattern:{
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format provided."
                            }  
                            
                        })} />
                        <Text>{errors.email?.message}</Text>

                        <FormLabel mt={4}>Password</FormLabel>
                        <Input type="password" placeholder="Enter your password" id = "password" {...register("password", {
                            required: "Password is required",
                            validate: {
                                passwordLength: (fieldValue) => {
                                    if(fieldValue.length < 8) {
                                        return "Password must be at least 8 Characters long"
                                    }

                                    return true
                                },
                                passwordStrength: (fieldValue) => {
                                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).*$/;

                                    if(!passwordRegex.test(fieldValue)){
                                        return "Password must contain a lowercase letter, uppercase letter, digit and a special symbol" 
                                    }

                                    return true
                                }

                            }
                            
                        })} />

                        <Text>{errors.password?.message}</Text>


                        <FormLabel mt={4}>First Name</FormLabel>
                        <Input type="text" placeholder="Enter your first name" id = "firstName" {...register("firstName", {
                            required: "First Name is required"
                        })} />
                        <Text>{errors.firstName?.message}</Text>


                        <FormLabel mt={4}>Last Name</FormLabel>
                        <Input type="text" placeholder="Enter your last name" id = "lastName" {...register("lastName", {
                            required: "Last Name is required"
                        })} />
                        <Text>{errors.lastName?.message}</Text>


                        <FormLabel mt={4}>Company Name</FormLabel>
                        <Input type="text" placeholder="Enter your company name" id = "companyName" {...register("companyName", {
                            required: "Company Name is required"
                        })} />
                        <Text>{errors.companyName?.message}</Text>

                    </FormControl>

                    <Flex
                        direction="row"
                        justifyContent="center"
                        gap="25px"
                    >
                        <Button mt={4} type="submit" colorScheme="blue">
                                Submit
                        </Button>

                        <Button mt={4} onClick={() => reset()}  colorScheme="blue">
                                Reset Form
                        </Button>
                    </Flex>
                    
        
                
                </form>
            </Box>
      
      </Flex>

      </div>


    )

}

export default Signup;