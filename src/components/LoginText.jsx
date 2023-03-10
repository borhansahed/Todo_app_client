import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const LoginText = ({title, text, textSize}) => {
  return (
    <Box textColor={'white'} bg={'#03015d'} h={'100%'} w={'50%'} pt={'12'} borderRadius={'2xl'}  px={'20'}>
      <Text fontSize={'5xl'} fontWeight={'bold'} mb={'5'}>
        {title}
      </Text>
        <Text w={textSize} fontSize={'sm'}>
        Login and start creating your next task Don't have an account? <span style={{fontWeight:'bold'}}><Link to={'/signin'}>Sign up</Link></span>
        </Text>
        </Box>
  )
}

export default LoginText