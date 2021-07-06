import {Flex, Button, Stack} from '@chakra-ui/react';
import {Input} from '../components/Form/Input';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';


type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})


export default function SignIn() {

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const {errors} = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  }

  return (
    <Flex 
      w='100vw' 
      h='100vh'
      align='center'
      justify='center' 
    >
      <Flex 
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input name='email' type='email' label='E-mail' error={errors.email} {...register('email')} />
          <Input name='password' type='password' label='Senha' error={errors.password} {...register('password')} />
        </Stack>
          <Button mt='6' type="submit" colorScheme="pink" size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
