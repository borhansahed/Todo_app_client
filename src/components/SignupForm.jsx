import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";

const SignupForm = ({
  handleSubmit,
  setEmail,
  setPassword,
  setUsername,
  setConfirmPassword,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Box display={"flex"} flexDirection={"column"} height={['100%']} w={"100%"} rowGap={["20","14","20"]}>
        <Box>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            size={["sm","md", "lg"]}
            placeholder="Username"
            mb={"4"}
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            size={["sm","md", "lg"]}
            placeholder="Email"
            mb={"4"}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            size={["sm","md", "lg"]}
            placeholder="Password"
            mb={"4"}
          />
          <Input
            onChange={(e) => setConfirmPassword(e.target.value)}
            size={["sm","md", "lg"]}
            placeholder="Confirm Password"
          />
        </Box>
        <Box>
          <Button
            size={["sm", "md"]}
            type="Submit"
            color={"white"}
            bg={"#03015d"}
            w={["100%"]}
          >
            Sign Up
          </Button>
          {error && (
            <Text color={"red"} mt={"1"}>
              {error}
            </Text>
          )}
        </Box>
      </Box>
    </form>
  );
};

export default SignupForm;
