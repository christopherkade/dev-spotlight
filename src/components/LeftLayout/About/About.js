import React from "react"
import styled from "styled-components"

import { Title } from "components/common/Title"

const Description = styled.div`
  margin: 0;
  max-width: 30%;
  color: white;

  @media screen and (max-width: 880px) {
    max-width: 100%;
  }
`

const About = ({ title, description }) => {
  return (
    <>
      <Title>{title}</Title>

      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </>
  )
}

export default About
