import {
  Box,
  Input,
  Text,
  FormLabel,
  Checkbox,
  Button,
  Image,
  Link,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Signigfun } from "../Redux/Auth-reducer/action";
import { useNavigate } from "react-router-dom";

export default function SsignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((data) => data.AuthReducer.isAuth);
  const isError = useSelector((data) => data.AuthReducer.isError);
  const toast = useToast();
  const errorData = useSelector((data) => data.AuthReducer.errorData);
  function SendSignInRequest() {
    dispatch(Signigfun({ email: email, password: password }));
  }

  useEffect(() => {
    if (isAuth === true) {
      toast({
        title: `Login Successfull`,
        status: "success",
        duration: 900,
        position: "top",
        isClosable: true,
      });
      // alert("Your Account Sucessfully Created");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isAuth]);

  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        h={"60px"}
        border={"1px solid black"}
      >
        <Image
          onClick={() => navigate("/")}
          cursor={"pointer"}
          marginLeft={"7%"}
          src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1"
        />
      </Box>
      <Box
        margin={"auto"}
        w={{ base: "90%", md: "80%", lg: "30%" }}
        marginTop={"40px"}
      >
        <Box mb={"20px"}>
          <Text fontSize={"4xl"} fontWeight={"600"}>
            Sign in
          </Text>
        </Box>
        <Box mb={"30px"}>
          <FormLabel>Enter Email</FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            w={"100%"}
            h={"55px"}
            border={`2px solid`}
            type={"email"}
          />
          {isError &&
            errorData
              .filter((e) => {
                return e.param === "email";
              })
              .map((e, i) => (
                <FormLabel key={i} mt={"5px"} color={"red"}>
                  {e.msg}
                </FormLabel>
              ))}
        </Box>
        <Box mb={"20px"}>
          <FormLabel>Enter Password</FormLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            w={"100%"}
            h={"55px"}
            border={`2px solid`}
            type={"password"}
          />
          {isError &&
            errorData
              .filter((e) => {
                return e.param === "password";
              })
              .map((e, i) => (
                <FormLabel key={i} mt={"5px"} color={"red"}>
                  {e.msg}
                </FormLabel>
              ))}
        </Box>
        <Box mb={"20px"}>
          <Checkbox size={"lg"} defaultChecked>
            Keep me signed in
          </Checkbox>
        </Box>
        <Box>
          <Text></Text>
        </Box>
        <Box mb={"20px"}>
          <Box>
            <label>By signing in, I agree to the Expedia</label>{" "}
            <label style={{ color: "blue", cursor: "pointer" }}>
              Terms and Conditions,
            </label>
          </Box>
          <Box>
            <label style={{ color: "blue", cursor: "pointer" }}>
              Privacy Statement{" "}
            </label>
            <label>and </label>
            <label style={{ color: "blue", cursor: "pointer" }}>
              Expedia Rewards Terms and Conditions.
            </label>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={SendSignInRequest}
            w={"100%"}
            bg={"#0693e3"}
            h={"55px"}
          >
            Sign in
          </Button>
        </Box>
        <Box mt={"15px"} display="flex" justifyContent={"center"}>
          <Link color={"blue"}>Forgot password?</Link>
        </Box>
        <Box mt={"15px"} display="flex" justifyContent={"center"}>
          <label htmlFor="">Don't have an account? </label>
          <label style={{ color: "white" }} htmlFor="">
            o
          </label>
          <Link
            onClick={() => navigate("/create_account")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {" "}
            Create one
          </Link>
        </Box>
        <Box mt={"25px"} display="flex" justifyContent={"center"}>
          <label htmlFor="">or continue with</label>
        </Box>
        <Box mt={"10px"} display="flex" justifyContent={"center"}>
          <AiFillApple
            size={"25px"}
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
          <FcGoogle
            size={"25px"}
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
          <AiFillFacebook
            size={"25px"}
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
