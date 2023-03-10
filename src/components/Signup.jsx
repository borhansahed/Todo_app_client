import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";
import SignupText from "./SignupText";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }
  return (
   <>
   {
    loading ? <Loader/> :(
      <Stack
      direction={"row"}
      bg={"#c4c4c4"}
      justifyContent={"center"}
      align={"center"}
      h={"100vh"}
    >
      <Box
        bg={"white"}
        display={"flex"}
        height={"50%"}
        w={"57%"}
        borderRadius={"2xl"}
        columnGap={"16"}
        alignItems={"center"}
        pl={"8"}
      >
        <form onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection={"column"} w={"100%"} rowGap={"20"}>
          <Box>
            <Input onChange={(e) => setUsername(e.target.value)} size={"lg"} placeholder="Username" mb={"4"} />
            <Input onChange={(e) => setEmail(e.target.value)} size={"lg"} placeholder="Email" mb={"4"} />
            <Input onChange={(e) => setPassword(e.target.value)} size={"lg"} placeholder="Password" mb={"4"} />
            <Input onChange={(e) => setConfirmPassword(e.target.value)} size={"lg"} placeholder="Confirm Password" />
          </Box>
          <Box>

          
          <Button type="Submit" color={"white"} bg={"#03015d"} w={"100%"}>
            Sign Up
          </Button>
          {error && <Text color={'red'} mt={'1'}>{error}</Text>}
          </Box>
        </Box>
        </form>
        <SignupText title={"Sign Up"} />
      </Box>
    </Stack>
    )
   }
   </>
  );
};

export default Signup;
