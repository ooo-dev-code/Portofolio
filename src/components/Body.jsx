import React from 'react'
import styled from 'styled-components'

function Body() {
  return (
    <div>
        <Container className='container'>
            <Title_container className='Title_container'>
                <Title className='Title'>
                    <u>My First Portofolio</u>
                    <p className='subtitle'>
                        My biggest CSS HTML JS project...
                    </p>
                    <p className='sub'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, consectetur. Maiores autem nemo expedita soluta error aliquid suscipit deserunt pariatur tempore, quo excepturi. Impedit ullam explicabo qui laboriosam vitae consectetur.</p>
                </Title>
            </Title_container>
        </Container>
    </div>
  )
}

const Container = styled.div``;

const Title = styled.div``;

const Title_container = styled.div``;

export default Body
