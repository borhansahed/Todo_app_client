import {
  Box,
  Card,
  CardBody,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { compeleteTodo, deleteTodo } from "../reduxSlice/TodoSlice";

const TodoView = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();
  return (
    <Stack mt={"20"} mb={"16"}>
      <Box>
        <Text
          color={"#03015d"}
          fontSize={["2xl","3xl"]}
          fontWeight={"bold"}
          align={"center"}
        >
          My All Tasks{" "}
          <span style={{ fontSize: "20px", color: "gray" }}>
            ({todos.length})
          </span>
        </Text>
      </Box>
      <Box
        display={"flex"}
        pt={"10"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"14"}
      >
        {todos.map((todo, i) => {
          
          return (
            <Card p={"3"} overflowY="auto" key={todo.id}>
              <CardBody>
                <Text fontSize={['md',"lg"]} w={"60"}>
                  {todo.todo}
                </Text>

                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  mt={["3"]}
                >
                  {todo.completed === true ? (
                    <Text color={"#03015d"} fontWeight={"bold"}>
                      completed
                    </Text>
                  ) : (
                    <Text
                      onClick={() => dispatch(compeleteTodo(todo.id))}
                      fontSize={"2xl"}
                    >
                      <FcCheckmark />
                    </Text>
                  )}

                  <Text
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    color={"#03015d"}
                    fontSize={"3xl"}
                  >
                    <MdDelete />
                  </Text>
                </Box>
              </CardBody>
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
};

export default TodoView;
