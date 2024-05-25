import React from 'react'
import { Box,Typography } from '@mui/material'

const Banner = ({data}) => {
  return (
    <>
         <Box
        sx={{
          height: "60vh",
          bgcolor: "#673DE6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: 600,
              letterSpacing: 2,
              textAlign: "center",
              color: "White",
              paddingY: "0.7rem",
            }}
          >
           {data.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              textAlign: "center",
              color: "White",
            }}
          >
           {data.desc}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Banner