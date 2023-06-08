import styled from 'styled-components'
import { Button } from '@chakra-ui/react'

export function SideMenu() {
    return (
        <Container>
            <Button colorScheme="teal" variant="outline">
                Novo
            </Button>
        </Container>
    )
}

const Container = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    padding: 16px;
`

