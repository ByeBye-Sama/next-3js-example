import React from 'react'
import styled from 'styled-components'
import theme from 'theme'
import { Text } from 'components'

export const Main = styled.main`
  align-items: center;
  background-color: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
  padding: ${theme.spacing(4)};

  > :not(:last-child) {
    margin-bottom: ${theme.spacing(2)};
  }
`

const DefaultLayout = props => {
  const { children } = props

  return (
    <Main id="main">
      <Text color="white" textStyle="title">
        Boilerplate by KayPacha
      </Text>
      {children}
    </Main>
  )
}

export default DefaultLayout
