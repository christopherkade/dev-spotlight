import React from "react"
import styled from "styled-components"

const StyledSpotlight = styled.div`
  position: absolute;
  top: -30px;
  height: 230px;
  display: inline-block;

  &:after {
    content: "";
    transition: all 0.5s;
    position: absolute;
    height: ${props => props.displaySpotlight ? "100%" : "0"};
    width: 100px;
    left: 50%;
    transform: translateX(-50%) perspective(155px) rotateX(30deg) rotate(0deg);
    animation: ${props => props.displaySpotlight ? 'moveSpotlight 3s, flicker 4s' : 'none'};
    transform-origin: top center;
    background: linear-gradient(0deg, transparent, rgba(255, 255, 255, 0.8));
    z-index: 1;

    @keyframes moveSpotlight {
      0% {
        transform: translateX(-50%) perspective(155px) rotateX(30deg) rotate(0deg);
      }
      40% {
        transform: translateX(-50%) perspective(155px) rotateX(30deg) rotate(5deg);
      }
      80% {
        transform: translateX(-50%) perspective(155px) rotateX(30deg) rotate(-5deg);
      }
      100% {
        transform: translateX(-50%) perspective(155px) rotateX(30deg) rotate(0deg);
      }
    }

    @keyframes flicker {
      0% {
        opacity: 0.1;
      }
      2% {
        opacity: 1;
      }
      20% {
        opacity: 1;
      }
      25% {
        opacity: 0.3;
      }
      30% {
        opacity: 1;
      }
      40% {
        opacity: 0.1;
      }
      70% {
        opacity: 0.7;
      }
      72% {
        opacity: 0.2;
      }
      77% {
        opacity: .9;
      }
      100% {
        opacity: .9;
      }
    }
  }

  @media screen and (max-width: 880px) {
    height: auto;
  }
`

const Spotlight = ({ displaySpotlight }) => {
  return (
    <StyledSpotlight displaySpotlight={displaySpotlight} />
  )
}

export default Spotlight
