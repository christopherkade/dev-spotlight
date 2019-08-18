import React from "react"
import styled from "styled-components"

import { About } from "components/LeftLayout/About"

const Wrapper = styled.div`
  position: absolute;
  left: 24px;
  top: 24px;

  @media screen and (max-width: 880px) {
    position: initial;
  }
`

const LeftLayout = ({ firstName, description, nextUp }) => {
  return (
    <Wrapper>
      <About title={`Tell us about yourself ${firstName}`} description={description} />
      <About title={`What's next for you?`} description={nextUp} />
    </Wrapper>
  )
}

export default LeftLayout
