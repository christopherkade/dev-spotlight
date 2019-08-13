import React from "react"
import styled from "styled-components"

import One from "./NumberImages/One.png"
import Two from "./NumberImages/Two.png"
import Three from "./NumberImages/Three.png"


const HighlightTitle = styled.h4`
  font-size: 1.5rem;
`

const HighlightRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

const HighlightNumber = styled.img`
  width: 50px;
`

const HighlightText = styled.p`
  margin: 0 0 0 12px;
`

const Highlights = ({ firstName }) => {
  return (
    <div>
      <HighlightTitle>Any recent highlights you'd like to share {firstName}?</HighlightTitle>

      <HighlightRow>
        <HighlightNumber src={One} alt="" />
        <HighlightText>Bla bla bla</HighlightText>
      </HighlightRow>

      <HighlightRow>
        <HighlightNumber src={Two} alt="" />
        <HighlightText>Bla bla bla</HighlightText>
      </HighlightRow>

      <HighlightRow>
        <HighlightNumber src={Three} alt="" />
        <HighlightText>Bla bla bla</HighlightText>
      </HighlightRow>
    </div>
  )
}

export default Highlights
