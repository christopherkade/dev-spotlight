import styled from "styled-components"

const MainCardLayout = styled.div`
  align-self: center;
  width: 100%;
  height: 80%;
  max-width: 80%;
  margin: 0 auto;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 20px 60px;
  box-shadow: 0 1px épx rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  @media only screen and (max-width : 769px) {
    padding: 10px 40px;
    height: auto;
  }
`

export default MainCardLayout
