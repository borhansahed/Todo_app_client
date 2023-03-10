import {
  Box,
  Button,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginText from "./LoginText";
import Loader from './Loader'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("hello error");
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {
      setLoading(false);
      setError("Failed to login your account!");
    }
  }
  return (
    <>
    {loading ? <Loader/> : (
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
        columnGap={"10"}
        alignItems={"center"}
        pr={"5"}
      >
        <LoginText title={"Login"} textSize={"60"} />

        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            w={"100%"}
            rowGap={"32"}
          >
            <Box>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                size={"lg"}
                placeholder="Email"
                mb={"6"}
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                size={"lg"}
                placeholder="Password"
              />
            </Box>
            <Box>
              <Button type="submit" color={"white"} bg={"#03015d"} w={"100%"}>
                Login
              </Button>
              {error && <Text color={'red'} mt='2'>{error}</Text>}
            </Box>
          </Box>
        </form>
      </Box>
    </Stack>
    )}
    
    </>
  );
};

export default Login;
