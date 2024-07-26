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
import { useSignUpMutation } from "../../services/Auth/AuthService";
import { signupSchema } from "../../validations/SignUp/SignUpSchema";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triggerSignUp, { isLoading, error }] = useSignUpMutation();
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirm, setErrorConfirm] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleData = async () => {
    try {
      signupSchema.validateSync({
        email,
        password,
        confirmPassword,
      });

      await triggerSignUp({
        email,
        password,
      }).unwrap();

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorEmail(null);
      setErrorPassword(null);
      setErrorConfirm(null);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate(`/login`);
      }, 3000);
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorEmail(err.message);
          break;
        case "confirmPassword":
          setErrorConfirm(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          alert("Ha ocurrido un error al registrarse. Inténtalo nuevamente.");
          break;
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
      <Text fontSize="3xl">Registrarse</Text>
      <Stack
        spacing={3}
        m={10}
        w="100%"
        justifyContent="center"
        align="center"
        maxW="900px"
      >
        {success && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            Usuario registrado con éxito, redirigiendo al login...
          </Alert>
        )}
        <Input
          placeholder="Ingrese un email"
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
          placeholder="Ingrese una contraseña"
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
        <Input
          placeholder="Confirmar contraseña"
          size="md"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errorConfirm && (
          <Alert status="error">
            <AlertIcon />
            {errorConfirm}
          </Alert>
        )}
      </Stack>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={handleData}
        isLoading={isLoading}
      >
        Confirmar Registro
      </Button>
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error.message ||
            "Ha ocurrido un error al registrarse. Inténtalo nuevamente."}
        </Alert>
      )}
    </Flex>
  );
}

export default SignUp;
