import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const LoginText = ({ title, textSize }) => {
  return (
    <Box
      textColor={"white"}
      bg={"#03015d"}
      h={"100%"}
      w={"50%"}
      pt={["24", "12"]}
      borderRadius={"2xl"}
      px={["4", "20"]}
    >
      <Text fontSize={["3xl", "5xl"]} fontWeight={"bold"} mb={"5"}>
        {title}
      </Text>
      <Text w={["40", textSize]} fontSize={"smaller"}>
        Login and start creating your next task Don't have an account?{" "}
        <span style={{ fontWeight: "bold" }}>
          <Link to={"/signin"}>Sign up</Link>
        </span>
      </Text>
    </Box>
  );
};

export default LoginText;
