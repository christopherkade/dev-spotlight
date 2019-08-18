import React, { useEffect, useState } from 'react'
import styled from "styled-components"

import { CenterLayout } from "components/CenterLayout"
import { LeftLayout } from "components/LeftLayout"
import { RightLayout } from "components/RightLayout"
import { Spotlight } from "components/Spotlight"
import {
  firstName,
  lastName,
  jobTitle,
  age,
  from,
  currentlyIn,
  gender,
  avatar,
  company,
  description,
  nextUp,
  twitterUrl,
  portfolioUrl,
  githubUrl,
  devUrl,
  linkedinUrl,
  projects,
  articles
} from "data/spotlightData.json"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 880px) {
    height: auto;
  }
`

const Content = styled.div`
  transition: all 1s;
  opacity: ${props => props.displaySpotlight ? "1" : "0"};
  z-index: 2;
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    padding: 24px;
  }
`

const App = () => {
  const [spotlight, setSpotlight] = useState(false)

  useEffect(() => {
    setSpotlight(true)
  }, [])

  return (
    <Wrapper>
      <Spotlight displaySpotlight={spotlight} />

      <Content displaySpotlight={spotlight}>
        <CenterLayout
          firstName={firstName}
          lastName={lastName}
          avatar={avatar}
          gender={gender}
          age={age}
          from={from}
          currentlyIn={currentlyIn}
          portfolioUrl={portfolioUrl}
          devUrl={devUrl}
          githubUrl={githubUrl}
          twitterUrl={twitterUrl}
          linkedinUrl={linkedinUrl}
          jobTitle={jobTitle}
          company={company}
        />

        <LeftLayout firstName={firstName} description={description} nextUp={nextUp} />
        <RightLayout firstName={firstName} projects={projects} articles={articles} />
      </Content>
    </Wrapper>
  );
}

export default App;
