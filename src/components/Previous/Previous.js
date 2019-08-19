import React from "react"
import styled from "styled-components"

import LeftArrow from "./left-arrow.svg"

const StyledPrevious = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 110;
  bottom: 20vh;
  left: 4px;
  background-color: transparent;
  border: none;
  color: #F6AE2D;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 1px solid #F6AE2D;
  }
`

const StyledArrow = styled.img`
  width: 24px;
  margin-right: 4px;
`

const Previous = ({ setSpotlightIndex }) => {
  const updateIndex = () => {
    setSpotlightIndex(prevIndex => prevIndex + 1)
  }

  return (
    <StyledPrevious onClick={updateIndex}>
      <StyledArrow src={LeftArrow} alt="" />
      Last week's spotlight
    </StyledPrevious>
  )
}

export default Previous
