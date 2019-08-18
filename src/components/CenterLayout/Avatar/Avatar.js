import styled from "styled-components"

const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 2px solid white;

  @media only screen and (max-width : 769px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (max-width : 320px) {
    width: 100px;
    height: 100px;
  }
`

export default Avatar
