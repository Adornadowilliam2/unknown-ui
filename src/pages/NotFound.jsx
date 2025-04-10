import React from 'react'
import bg from "../assets/bg.png"
import { Container, Typography } from '@mui/material'
export default function NotFound() {
  return (
    <Container style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <img src={bg} alt="not found image" style={{width:"200px"}} />
    <Typography variant='h5'>Page Not Found</Typography></Container>
  )
}
