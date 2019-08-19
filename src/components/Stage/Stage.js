import React from "react"
import styled from "styled-components"

import stage from "./stage.svg"

const StyledStage = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 18vh;
  z-index: 100;

  @media screen and (max-width: 880px) {
    position: fixed;
    height: 10vh;
  }
`

const Stage = () => {
  return (
    <StyledStage src={stage} alt="" />
  )
}

export default Stage
