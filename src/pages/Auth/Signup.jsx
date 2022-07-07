import React, { useState } from 'react'
import { Box, Button, Divider, Flex, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../app/actions/userAction'
import { setNotification } from '../../app/actions/notificationAction'
import Notification from '../../components/Notification'
import { history } from '../../utils/historyUtil'


const initialValues = {
  name: '',
  username: '',
  email: '',
  birthday: '',
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
  password: yup.string()
    .required('Password required!')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const Signup = () => {
  const { success, message } = useSelector((u) => u.user)
  const dispatch = useDispatch()
  const [ show, setShow ] = useState(false)
  const handleShow = () => setShow(!show)
  const onSubmit = async(values) => {
    const { name, username, email, birthday, password } = values
    try {
      await dispatch(signup({ name, username, email, birthday, password }))
      await dispatch(setNotification(message, 5000))
    } catch(err) {
      await dispatch(setNotification(message, 5000))
    }
  }
  return (
    <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit}>
      {({ handleSubmit, values, errors, touched, handleChange }) => (
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Box border="solid 1px #ddd" width="350px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" pt="5" pb="3" borderRadius={5}>
            <Notification status={success} />
            <Heading as="h2" textAlign="center" color="purple.300">Sign Up</Heading>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input placeholder="Name" _placeholder={{ color: 'purple.300' }} focusBorderColor="purple.300" name="name" value={values.name} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.name && touched.name ? ( <div>{errors.name}</div> ): null}</Box>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input placeholder="Username" _placeholder={{ color: 'purple.300' }} focusBorderColor="purple.300" name="username" value={values.username} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.username && touched.username ? ( <div>{errors.username}</div> ): null}</Box>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input placeholder="Email Address" _placeholder={{ color: 'purple.300' }} focusBorderColor="purple.300" name="email" value={values.email} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.email && touched.email ? ( <div>{errors.email}</div> ): null}</Box>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input placeholder="DOB" _placeholder={{ color: 'purple.300' }} focusBorderColor="purple.300" type="date" name="birthday" value={values.birthday} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.birthday && touched.birthday ? ( <div>{errors.birthday}</div> ): null}</Box>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input pr="4.5rem" placeholder="Password" _placeholder={{ color: 'purple.300' }} focusBorderColor="purple.300" name="password" type={show ? 'password' : 'text'} value={values.password} onChange={handleChange} />
              <InputRightElement width="4.5rem" mt="2" mb="2" mr="5" ml="5">
                <Button h="1.75rem" size="sm" onClick={handleShow} color="purple.300">{show ? 'Show': 'Hide'}</Button>
              </InputRightElement>
            </InputGroup>
            <Box color="red" pl="5">{errors.password && touched.password ? ( <div>{errors.password}</div> ): null}</Box>
            <InputGroup size="md" pt="2" pb="2" pr="5" pl="5">
              <Input pr="4.5rem" placeholder="Confirm Password" _placeholder={{ color: 'purple.300' }} focusBorderColor="purple.300" name="confirmPassword" type='password' value={values.confirmPassword} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.confirmPassword && touched.confirmPassword ? ( <div>{errors.confirmPassword}</div> ): null}</Box>
            <Box pt="2" pb="2" pr="5" pl="5" width="100%">
              <Button width="100%" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" mt={5} border="solid 2px #6C63FF" color="purple.300" onClick={handleSubmit}>Sign Up</Button>
              <Divider orientation="horizontal" />
              <Button width="100%" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" mt={5} border="solid 2px #6C63FF">
                <Heading color="purple.300" as="h4" size="md" onClick={() => history.push('/signin')}>Back to sign in</Heading>
              </Button>
            </Box>
          </Box>
        </Flex>
      )}
    </Formik>
  )
}

export default Signup