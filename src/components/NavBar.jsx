import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <Container className='Nav_bar_container'>
        <Name className='Name_style'>
            <i>Kaouachi</i>
        </Name>
        <Button className='Button_style'>
            <div className='Button_element one'>Resume</div>
            <div className='Button_element two'>About me</div>
            <div className='Button_element three'>Projects</div>
            <div className='Button_element four'>Contact</div>
        </Button>
    </Container>
  )
}

const Container = styled.div``;

const Name = styled.div``;

const Button = styled.div`

`;

export default NavBar
