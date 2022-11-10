import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
  Button,
  Badge,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const UserDetail = () => {
  const userData = useSelector((data) => data.AuthReducer.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickAccount = () => {
    navigate("/signin", { replace: true });
  };

  const handleSignOut = () => {
    dispatch({ type: "SIGNOUT" });
    navigate("/", { replace: true });
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <FaUserCircle cursor="pointer" size="1.2rem" />
        </MenuButton>
        <MenuList
          m={["auto", "auto"]}
          maxW="400px"
          w={["90%", "90%", "400px", "400px"]}
          p="1rem 1.5rem"
        >
          <Text textAlign="center" fontSize="1.2rem" fontWeight="bold">
            {" "}
            Hi, {userData.firstName}
          </Text>
          <Text textAlign="center" m="7px 0px" fontSize="0.8rem">
            {userData.email}
          </Text>

          <Flex justify="center">
            <Badge
              bg="#3662d8"
              color="white"
              p="5px 0.5rem"
              borderRadius="20px"
            >
              Blue Member
            </Badge>
          </Flex>
          <Text
            m="20px 0px"
            fontSize="1.3rem"
            textAlign="center"
            fontWeight="bold"
          >
            $ 0.00
          </Text>
          <MenuItem bg="none" _hover={{ bg: "none" }}>
            <Button
              onClick={onOpen}
              display="flex"
              alignItems="center"
              gap="10px"
              m="0px 0px 15px 0px"
              _hover={{ color: "#3662d8" }}
              w="100%"
              variant={"flushed"}
            >
              Points value <BiInfoCircle size="1.4rem" />{" "}
            </Button>
          </MenuItem>

          <Box
            borderTop="0.5px solid gray"
            borderBottom="0.5px solid gray"
            p="1rem 0px"
          >
            <MenuItem onClick={handleClickAccount} fontSize="1rem">
              Account
            </MenuItem>
            <MenuItem fontSize="1rem">List of favorites</MenuItem>
            <MenuItem fontSize="1rem">Feedback</MenuItem>
          </Box>

          <Box p="1rem">
            <MenuItem onClick={handleSignOut}>SignOut</MenuItem>
          </Box>
        </MenuList>
      </Menu>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text>
              This is what your Expedia Rewards points are worth toward bookings
              on Expedia.
            </Text>
          </ModalBody>

          <ModalFooter borderTop="0.5px solid gray">
            <Button onClick={onClose} w="100%" variant={"flushed"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserDetail;
