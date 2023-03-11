import { Box, Button, Input, Select, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reduxSlice/TodoSlice";

const AddTask = () => {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const idNumber = (Math.random(100 * 134) / 100) * 100;
  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo.length <= 0){
      return;
    }

    const newTodo = { id: idNumber, todo, completed: false };
    dispatch(addTodo(newTodo));
    setTodo("");
  };

  return (
    <Stack mt={["12", "20"]}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box display={"flex"} gap={"6"} justifyContent={"center"}>
            <Input
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              fontSize={["md", "lg"]}
              placeholder="Add Your Task"
              w={"50%"}
            />
            <Button
            size={['md']}
              type="Submit"
              color={"white"}
              fontWeight={"bold"}
              bg={"#03015d"}
            >
              + New Task
            </Button>
          </Box>
        </form>
      </Box>
    </Stack>
  );
};

export default AddTask;
