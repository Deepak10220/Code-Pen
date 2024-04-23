import React from 'react'
import { AppBar ,Toolbar ,styled } from '@mui/material'
import './style.css'

const Container = styled(AppBar)`
      background: #060606;
      height:9vh;
`

const Header = () => {
  const logo = 'https://blog.codepen.io/wp-content/uploads/2022/01/codepen-wordmark-display-inside-white@10x.png'
  return (
    <div>
      <Container position='static'>
        <Toolbar>
          <img className='img' src={logo} alt="logo" />
        </Toolbar>
      </Container>
    </div>
  )
}

export default Header
