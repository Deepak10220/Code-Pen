import React, { useEffect, useState } from 'react'
import { Box ,styled } from '@mui/material'
import { useContext } from 'react'
import {DataContext} from '../context/DataProvider'
const Result = () => {
    const [src, setSrc] = useState('')
    const {html, css, javascript} = useContext(DataContext)
    const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${javascript}</script>
    </html>
    `
    const Container = styled(Box)`
    height :50vh;
    `
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setSrc(srcCode)
        },1000)
        return ()=>{
            clearTimeout(timeOut)
        }
    },[html, css, javascript])
  return (
    <Container>
      <iframe srcDoc={src}
      title='Output'
      sandbox='allow-scripts'
      frameBorder={0}
      width='100%'
      height='100%'
      ></iframe>
    </Container>
  )
}

export default Result
