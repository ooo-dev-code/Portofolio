import React from 'react'
import styled from 'styled-components'

function Body() {
  return (
    <div>
        <Container1 className='container1'>
            <Title_container className='Title_container'>
                <Title className='Title'>
                    <u>My First Portofolio</u>
                    <p className='subtitle'>
                        My biggest CSS HTML JS project...
                    </p>
                    <p className='sub'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, consectetur. Maiores autem nemo expedita soluta error aliquid suscipit deserunt pariatur tempore, quo excepturi. Impedit ullam explicabo qui laboriosam vitae consectetur.</p>
                </Title>
            </Title_container>
        </Container1>
        <Container1 className='container2'>
            
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>
            <div className="transition_block"></div>

            

            <div  className='icone1'><img src="src\assets\js_icon.png" alt=""/></div>
            <img src="src\assets\py_icon.png" alt="" className='icone2'/>

            <div className="text_box"></div>
        </Container1>
    </div>
  )
}

const Container1 = styled.div``;

const Title = styled.div``;

const Title_container = styled.div``;

export default Body
