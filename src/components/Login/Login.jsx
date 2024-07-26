import React, { useState } from "react";
import {
  Flex,
  Input,
  Stack,
  Text,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useLoginMutation } from "../../services/Auth/AuthService";
import { loginSchema } from "../../validations/Login/LoginSchema";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, { isLoading, error }] = useLoginMutation();
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleData = async () => {
    try {
      loginSchema.validateSync({ email, password });

      const result = await triggerLogin({ email, password }).unwrap();

      const { idToken, email: userEmail } = result;
      const decodedToken = JSON.parse(atob(idToken.split(".")[1]));

      dispatch(
        setUser({
          email: userEmail,
          token: idToken,
          localId: decodedToken.user_id,
        })
      );

      setSuccess(true);
      setEmail("");
      setPassword("");
      setErrorEmail(null);
      setErrorPassword(null);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err);
      if (err.path === "email") {
        setErrorEmail(err.message);
      } else if (err.path === "password") {
        setErrorPassword(err.message);
      } else {
        alert("Ha ocurrido un error al iniciar sesión. Inténtalo nuevamente.");
      }
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      m={10}
    >
      <Text fontSize="3xl">Login</Text>
      <Stack
        spacing={3}
        m={10}
        w="100%"
        justifyContent="center"
        align="center"
        maxW="900px"
      >
        {success && (
          <Alert status="success">
            <AlertIcon />
            Inicio de sesión exitoso, redirigiendo a la home...
          </Alert>
        )}
        <Input
          placeholder="Email"
          size="md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmail && (
          <Alert status="error">
            <AlertIcon />
            {errorEmail}
          </Alert>
        )}
        <Input
          placeholder="Contraseña"
          size="md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorPassword && (
          <Alert status="error">
            <AlertIcon />
            {errorPassword}
          </Alert>
        )}
      </Stack>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={handleData}
        isLoading={isLoading}
      >
        Confirmar Sesión
      </Button>
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error.message ||
            "Ha ocurrido un error al iniciar sesión. Inténtalo nuevamente."}
        </Alert>
      )}
    </Flex>
  );
}

export default Login;
