import React, { useState } from 'react'
import { Flex, Box, Heading, Input, InputGroup, InputRightElement, Button, Divider } from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'
import * as yup from 'yup'
import { Formik } from 'formik'
import { history } from '../../utils/historyUtil'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../app/actions/authAction'
import { setNotification } from '../../app/actions/notificationAction'
import Notification from '../../components/Notification'

const formSchema = yup.object().shape({
  email: yup.string()
    .required('Email is required').email(),
  password: yup.string()
    .required('Password is required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character')
    .min(8)
    .max(25)
})

const initialValues = {
  email: '',
  password: ''
}

const SignIn = () => {
  const dispatch = useDispatch()
  const { message } = useSelector((user) => user.auth)
  const [ show, setShow ] = useState(false)
  const handleShow = () => setShow(!show)
  const onSubmit = async (values) => {
    const { email, password } = values
    try {
      await dispatch(signin({ email: email, password: password }))
      await dispatch(setNotification(message, 5000))
    } catch(err) {
      await dispatch(setNotification(message, 5000))
    }
  }
  return (
    <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit}>
      {({ handleSubmit, errors, touched, handleChange, values }) => (
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Box width="350px" pt="10" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" borderRadius={5}>
            <Notification />
            <Heading as="h2" textAlign="center" color="purple.300"><LockIcon />{' '}Sign In</Heading>
            <InputGroup size="md" p="5">
              <Input placeholder="Email Address" _placeholder={{ color: 'purple.300' }} focusBorderColor="purple.300" name="email" value={values.email} onChange={handleChange} />
            </InputGroup>
            <Box color="red" pl="5">{errors.email && touched.email ? ( <div>{errors.email}</div> ): null}</Box>
            <InputGroup size="md" p="5">
              <Input pr="4.5rem" placeholder="Password" _placeholder={{ color: 'purple.300' }} type={show ? 'password' : 'text'} focusBorderColor="purple.300" name="password" value={values.password} onChange={handleChange} />
              <InputRightElement width="4.5rem" m="5">
                <Button h="1.75rem" size="sm" onClick={handleShow} color="purple.300">{show ? 'Show': 'Hide'}</Button>
              </InputRightElement>
            </InputGroup>
            <Box color="red" pl="5">{errors.password && touched.password ? ( <div>{errors.password}</div> ): null}</Box>
            <Box p="5" width="100%">
              <Button width="100%" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" border="solid 2px #6C63FF" onClick={handleSubmit}>
                <Heading color="purple.300" as="h4" size="md">Sign In</Heading>
              </Button>
              <Divider orientation="horizontal" />
              <Button width="100%" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" mt={5} border="solid 2px #6C63FF">
                <Heading color="purple.300" as="h4" size="md" onClick={() => history.push('/signup')}>Join now</Heading>
              </Button>
            </Box>
          </Box>
        </Flex>
      )}
    </Formik>
  )
}

export default SignIn