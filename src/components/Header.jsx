import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiTodoLine } from "react-icons/ri";

import Profile from "./Profile";

const Header = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex align={"center"} gap={"2"} color={"#03015d"}>
        <Text fontSize={"2xl"}>
          <RiTodoLine />
        </Text>
        <Text fontSize={["2xl", "4xl"]} fontWeight={"bold"}>
          Todo App
        </Text>
      </Flex>

      <Profile />
    </Stack>
  );
};

export default Header;
