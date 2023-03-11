import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";

const LoginForm = ({ handleSubmit, setEmail, setPassword, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        w={"100%"}
        rowGap={["20", "32"]}
        pr={["2", "0.5"]}
      >
        <Box>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            size={["sm", "lg"]}
            placeholder="Email"
            mb={"6"}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            size={["sm", "lg"]}
            placeholder="Password"
          />
        </Box>
        <Box>
          <Button size={['sm','md']} type="submit" color={"white"} bg={"#03015d"} w={"100%"}>
            Login
          </Button>
          {error && (
            <Text color={"red"} mt="2">
              {error}
            </Text>
          )}
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
