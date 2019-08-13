import React from 'react'
import styled from "styled-components"

import './App.css';
import { MainCardLayout } from "components/MainCardLayout"
import { SpotlightInfo } from "components/SpotlightInfo"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const Title = styled.h1`
  font-size: 1.25rem;

  @media only screen and (max-width : 769px) {
    font-size: 1rem;
  }
`

const Subtitle = styled.h2`
  @media only screen and (max-width : 769px) {
    font-size: 1.25rem;
  }
`

const App = () => {
  return (
    <MainCardLayout>
      <HeaderWrapper>
        <Subtitle>This week's spotlight...</Subtitle>
        <Title>Dev Spotlight</Title>
      </HeaderWrapper>

      <SpotlightInfo />
    </MainCardLayout>
  );
}

export default App;
