import React from "react"
import styled from "styled-components"

import { Title } from "components/common/Title"

const Wrapper = styled.div`
  max-width: 30%;

  @media screen and (max-width: 880px) {
    max-width: 100%;
  }
`

const Description = styled.div`
  margin: 0;
  color: white;
`

const About = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </Wrapper>
  )
}

export default About
