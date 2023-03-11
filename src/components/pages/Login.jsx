import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginText from "../LoginText";
import Loader from "../Loader";
import LoginForm from "../LoginForm";
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
      {loading ? (
        <Loader />
      ) : (
        <Stack
          direction={["column", "row"]}
          bg={"#c4c4c4"}
          justifyContent={"center"}
          align={"center"}
          h={"100vh"}
        >
          <Box
            bg={"white"}
            display={"flex"}
            height={"50%"}
            w={["95%", "57%"]}
            borderRadius={"2xl"}
            columnGap={["4", "10"]}
            alignItems={"center"}
            pr={["0.5", "5"]}
          >
            <LoginText title={"Login"} textSize={"60"} />

            <LoginForm
              handleSubmit={handleSubmit}
              setEmail={setEmail}
              setPassword={setPassword}
              error={error}
            />
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Login;
