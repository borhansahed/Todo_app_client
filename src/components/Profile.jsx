import {
  Avatar,
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  return (
    <Box>
      <Popover >
        <PopoverTrigger>
          <Avatar
            name={currentUser.displayName}
            src="https://bit.ly/dan-abramov"
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent border={'none'} w={['44','60']}>
            <PopoverCloseButton />
            <PopoverBody p={"5"}>
              <Text align={"center"} fontSize={['sm',"lg"]}>
                {currentUser.email}
              </Text>
              <Button
                onClick={logout}
                color={"white"}
                ml={['8',"14"]}
                bg={"#03015d"}
                mt={"2"}
                size={'sm'}
              >
                Logout
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
};

export default Profile;
