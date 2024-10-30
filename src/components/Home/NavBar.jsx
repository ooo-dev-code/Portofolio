import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function NavBar() {

  const [height, setHeight] = useState(0)

  const hide = () => {
    setHeight("-80px")
  }

  const show =  () => {
    setHeight("0")
  }

  return (
    <div>
      <Container className='Nav_bar_container' style={{ 
        top: `${height}`,
        transition: "all 1s ease-out"
        }}>
          <Name className='Name_style'>
              <i>Kaouachi</i>
          </Name>
          <Button className='Button_style'>
            <Link to={"/resume"}>
            
            <div className='Button_element one'>Resume</div>
            </Link>
            <Link to={"/aboutme"}>
            <div className='Button_element two'>About me</div>
            </Link>
            <Link to={"/projects"}>
            <div className='Button_element three'>Projects</div>
            </Link>
            <Link to={"/contact"}>
            <div className='Button_element four'>Contact</div>
            </Link>
              <div onClick={hide}>
                ❌
              </div>
              <Container2 className='Nav_bar_container2'>
                <div onClick={show}>
                  🔽
                </div>
              </Container2>
          </Button>
          
      </Container>

    </div>

  )
}


const Container = styled.div``;
const Container2 = styled.div``;

const Name = styled.div``;

const Button = styled.div`

`;

export default NavBar;
