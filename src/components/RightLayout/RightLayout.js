import React from "react"
import styled from "styled-components"

import { Projects } from "components/RightLayout/Projects"
import { Articles } from "components/RightLayout/Articles"

const Wrapper = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  text-align: right;

  @media screen and (max-width: 880px) {
    position: initial;
    text-align: left;
    width: 100%;
  }
`

const RightLayout = ({ projects, articles }) => {
  return (
    <Wrapper>
      <Projects projects={projects} />
      <Articles articles={articles} />
    </Wrapper>
  )
}

export default RightLayout
