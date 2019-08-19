import React from "react"
import styled from "styled-components"

import RightArrow from "./right-arrow.svg"

const StyledNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 110;
  bottom: 20vh;
  right: 4px;
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
    setSpotlightIndex(prevIndex => prevIndex - 1)
  }

  return (
    <StyledNext onClick={updateIndex}>
      Next spotlight
      <StyledArrow src={RightArrow} alt="" />
    </StyledNext>
  )
}

export default Previous
