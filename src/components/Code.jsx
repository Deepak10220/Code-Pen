import React from 'react'
import Editor from './Editor'
import { Box , styled} from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
  display: flex;
  background-color : #060606;
  height: 55vh;
`

const Code = () => {

  const {html , setHtml , css ,setCss , javascript ,setJavaScript} = useContext(DataContext)
  return (
    <Container>
      <Editor 
        heading = 'HTML'
        icon = '/'
        bgColor = 'red'
        value ={html}
        onChange = {setHtml}
      />
      <Editor
        heading = 'CSS'
        icon = '*'
        bgColor = 'blue'
        value ={css}
        onChange = {setCss}
      />
      <Editor
        heading = 'JavaScript'
        icon = '{}'
        bgColor = 'yellow'
        value ={javascript}
        onChange = {setJavaScript}
      />
    </Container>
  )
}

export default Code
