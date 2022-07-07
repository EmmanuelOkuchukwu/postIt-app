import React from 'react'
import { Alert, Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { AlertIcon } from '@chakra-ui/react'

const Notification = () => {
  const message = useSelector((msg) => msg.notification)
  if(message === null) {
    return null
  }
  return (
    <Box p={5}>
      <Alert status="info">
        <AlertIcon />
        {message}
      </Alert>
    </Box>
  )
}

export default Notification