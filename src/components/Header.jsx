import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiTodoLine } from "react-icons/ri";

const Header = () => {
  return (
    <Stack mt={"1.5"} direction={"row"} justifyContent={"space-between"} align={'center'}>
      <Flex align={"center"} ml={"10"}>
        <Text fontSize={"2xl"}>
          <RiTodoLine />
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} ml={"1"}>
          Todo App
        </Text>
      </Flex>

      <Box >
        <Avatar
      
          marginRight={"10"}
          src="https://bit.ly/dan-abramov"
        />
      </Box>
    </Stack>
  );
};

export default Header;
