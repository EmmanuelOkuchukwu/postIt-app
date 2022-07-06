import React, { useState } from 'react'
import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import * as yup from 'yup'
import { Formik } from 'formik'

const initialValues = {
  name: '',
  username: '',
  email: '',
  // birthday: '',
  password: '',
  confirmPassword: ''
}

const formSchema = yup.object().shape({
  name: yup.string()
    .required('Name required!'),
  username: yup.string()
    .required('username required!'),
  email: yup.string()
    .required('Email required!')
    .email(),
  // birthday: yup.string()
  //   .required('Birthday required!'),
  password: yup.string()
    .required('Password required!')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const Signup = () => {
  const [ show, setShow ] = useState(false)
  const handleShow = () => setShow(!show)
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit}>
      {({ handleSubmit, values, errors, touched, handleChange }) => (
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Box border="solid 1px #ddd" width="350px" pt="5" pb="3" borderRadius={5}>
            <Heading as="h2" textAlign="center">Sign Up</Heading>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input placeholder="Name" name="name" value={values.name} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.name && touched.name ? ( <div>{errors.name}</div> ): null}</Box>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input placeholder="Username" name="username" value={values.username} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.username && touched.username ? ( <div>{errors.username}</div> ): null}</Box>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input placeholder="Email Address" name="email" value={values.email} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.email && touched.email ? ( <div>{errors.email}</div> ): null}</Box>
            {/*<InputGroup size="md" pt="2" pb="2" pr="5" pl="5">*/}
            {/*  <Input placeholder="DOB" name="birthday" value={values.birthday} onChange={handleChange} />*/}
            {/*</InputGroup>*/}
            {/*<Box color="red" pl="5">{errors.birthday && touched.birthday ? ( <div>{errors.birthday}</div> ): null}</Box>*/}
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input pr="4.5rem" placeholder="Password" name="password" type={show ? 'password' : 'text'} value={values.password} onChange={handleChange} />
              <InputRightElement width="4.5rem" mt="2" mb="2" mr="5" ml="5">
                <Button h="1.75rem" size="sm" onClick={handleShow}>{show ? 'show': 'hide'}</Button>
              </InputRightElement>
            </InputGroup>
            <Box color="red" pl="5">{errors.password && touched.password ? ( <div>{errors.password}</div> ): null}</Box>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input pr="4.5rem" placeholder="Confirm Password" name="confirmPassword" type='password' value={values.confirmPassword} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.confirmPassword && touched.confirmPassword ? ( <div>{errors.confirmPassword}</div> ): null}</Box>
            <Box pt="2" pb="2" pr="5" pl="5" width="100%">
              <Button width="100%" onClick={handleSubmit}>Sign Up</Button>
            </Box>
          </Box>
        </Flex>
      )}
    </Formik>
  )
}

export default Signup