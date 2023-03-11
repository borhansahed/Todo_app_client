import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../Loader";
import SignupForm from "../SignupForm";
import SignupText from "../SignupText";

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
      {loading ? (
        <Loader />
      ) : (
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
            w={["95%","57%"]}
            borderRadius={"2xl"}
            columnGap={['6',"16"]}
            alignItems={"center"}
            pl={["3","8"]}
          >
            <SignupForm
              handleSubmit={handleSubmit}
              setEmail={setEmail}
              setUsername={setUsername}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              error={error}
            />
            <SignupText title={"Sign Up"} />
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Signup;
