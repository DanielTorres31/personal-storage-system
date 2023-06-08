import styled from 'styled-components'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import { SideMenu } from './components/SideMenu'
import { TopMenu } from './components/TopMenu'

function App() {
    return (
        <ChakraBaseProvider theme={theme}>
            <Container>
                <TopMenu />
                <Body>
                    <SideMenu></SideMenu>
                    <Content></Content>
                </Body>
            </Container>
        </ChakraBaseProvider>
    )
}

const { Button } = chakraTheme.components
const theme = extendBaseTheme({
    styles: {
        global: {
            'html, body': {
                backgroundColor: '#F2F2F2',
            },
        },
    },
    components: {
        Button,
    },
})

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Body = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 15% 85%;
    width: 100%;
    height: calc(100% - 60px);
    padding: 0 16px 16px;
`

const Content = styled.div`
    background-color: white;
    border-radius: 25px;
`

export default App

