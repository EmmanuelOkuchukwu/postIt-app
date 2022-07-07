import React from 'react'
import { Alert, Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { AlertIcon } from '@chakra-ui/react'

const Notification = () => {
  const message = useSelector((msg) => msg.notification)
  const { success } = useSelector((user) => user.auth)
  if(message === null) {
    return null
  }
  return (
    <Box p={5}>
      {success ? <Alert status="success"><AlertIcon />{message}</Alert> : <Alert status="error"><AlertIcon />{message}</Alert>}
    </Box>
  )
}

export default Notification