import styled from 'styled-components'

export function TopMenu() {
    return (
        <Container>
            <Logo>Logo</Logo>
        </Container>
    )
}

const Container = styled.header`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 8px 16px;
    background-color: transparent;
`

const Logo = styled.span`
    text-transform: uppercase;
    color: #1b1b1b;
    font-weight: bold;
    font-size: 24px;
`

