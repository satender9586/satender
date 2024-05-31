import { Box, Typography } from '@mui/material'
import React from 'react'

const Finx = () => {
  return (
    <Box sx={{ padding: "2rem 5%",bgcolor:"#F7FAFF",minHeight:"300px" ,display:"flex",flexDirection:"column",justifyContent:"center"}} >
        <Typography sx={{textAlign:"center",fontSize:"30px",fontWeight:600}}>Find the right security solution for you business</Typography>
        <Typography sx={{textAlign:"center",fontSize:"18px",color:"#677788"}}>Contact us today to learn more about our security solutions and how we can help your business stay secure.</Typography>
    </Box>
  )
}

export default Finx