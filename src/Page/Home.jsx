import React from 'react'
import styled from 'styled-components'
import "./Home.css"
import Header from '../Components/Header'
import Bottom from '../Components/Bottom'
import Button from '../Components/Button'
import Chart from '../Components/Chart'
const Home =()=>{
  return(
   <div>
        <Header/>
        <Bottom/>
        <Button/>
        <Chart/>
   </div>
  )
}
export default Home
