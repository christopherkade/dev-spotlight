import styled from "styled-components"

const DevTitles = styled.p`
  margin: 0;
  color: white;

  & > span {
    font-weight: bold;
    color: white;
  }

  &:first-of-type {
    margin-top: 20px;
  }

  &:last-of-type {
    margin-bottom: 20px;
  }
`

export default DevTitles
