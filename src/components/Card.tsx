import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
    background-color: pink;
`

export const Card = () => {
    return <Container>Playing card</Container>
}
