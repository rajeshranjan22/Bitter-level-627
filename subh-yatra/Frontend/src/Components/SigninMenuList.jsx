import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SigninMenuList = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/signin", { replace: true });
  };

  const handleClickSignUp = () => {
    navigate("/create_account", { replace: true });
  };

  return (
    <Menu>
      <MenuButton>Sign in</MenuButton>
      <MenuList
        m={["auto", "auto"]}
        maxW="400px"
        w={["85%", "90%", "400px", "400px"]}
        p="1rem 1.5rem"
      >
        <Text fontSize="1.2rem" fontWeight="bold">
          You could be getting lower prices
        </Text>
        <Text m="7px 0px" fontSize="0.8rem">
          Save 10% or more on thousands of properties with member prices.
        </Text>

        <MenuItem w="100%">
          <Button
            w="100%"
            _hover={"none"}
            onClick={handleClickSignIn}
            m="15px 0px"
            color="white"
            bg="#3662d8"
          >
            Sign in
          </Button>
        </MenuItem>
        <MenuItem w="100%">
          <Button
            onClick={handleClickSignUp}
            m="15px 0px"
            w="100%"
            _hover={{ color: "#3662d8" }}
            variant={"flushed"}
          >
            Sign up, it's free
          </Button>
        </MenuItem>

        <MenuItem fontSize="0.9rem">List of favorites</MenuItem>
        <MenuItem fontSize="0.9rem">Expedia Rewards</MenuItem>

        <Box borderTop="0.5px solid gray" p="1rem 0px">
          <MenuItem fontSize="0.9rem">Feedback</MenuItem>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default SigninMenuList;
