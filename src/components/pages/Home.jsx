
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header'
import AddTask from '../Todo/AddTask'
import TodoView from '../Todo/TodoView'

const Home = () => {
  return (
    <Box mt={['7','10']} px={['10','52']}>
      <Header/>
      <AddTask/>
      <TodoView/>
     
    </Box>
   
  )
}

export default Home