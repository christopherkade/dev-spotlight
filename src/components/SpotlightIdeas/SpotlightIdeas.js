import React from "react"
import styled from "styled-components"

const Wrapper = styled.p`
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 101;

  & > a {
    color: #F6AE2D;
  }

  @media screen and (max-width: 880px) {
    position: fixed;
  }
`

const SpotlightIdeas = () => {
  return (
    <Wrapper>
      Someone to recommend for next week's spotlight? <br />
      Feel free to tweet it at me <a href="https://twitter.com/christo_kade">@christo_kade</a>
    </Wrapper>
  )
}

export default SpotlightIdeas
