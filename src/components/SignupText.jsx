import { Box, Text } from '@chakra-ui/react'
import React  from 'react'
import { Link,  } from 'react-router-dom'


const SignupText = ({title}) => {
  
  return (
    <Box textColor={'white'} bg={'#03015d'} h={'100%'} w={'100%'} pt={'12'} borderRadius={'2xl'}  px={'20'}>
      <Text fontSize={'5xl'} fontWeight={'bold'} mb={'5'}>
       {title}
      </Text>
        <Text w={'64'} fontSize={'sm'}>Register and Create an account on Todo List. Write your task anytime anywhere 
        </Text>
        <Text w={'64'} fontSize={'sm'} mt={'3'}>  Already have an account? <span style={{fontWeight:'bold'}}><Link to={'/login'}>Login</Link></span></Text>
        </Box>
  )
}

export default SignupText;