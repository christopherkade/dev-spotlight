import React from "react"
import styled from "styled-components"

import { Avatar } from "components/SpotlightInfo/MainInfo/Avatar"
import placeholderMale from "assets/placeholder_male.svg"
import placeholderFemale from "assets/placeholder_female.svg"

const Wrapper = styled.div`
  display: flex;

  @media only screen and (max-width : 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width : 768px) {
    justify-content: center;
  }
`

const MainTextWrapper = styled.div`
  margin-left: 25px;
  border-right: 1px solid black;
  margin: 20px 0 20px 25px;;
  padding-right: 20px;

  @media only screen and (max-width : 1092px) {
    border-right: none;
  }
`

const Description = styled.div`
  margin: 0;
  max-width: 50%;
  padding: 20px;
`

const FullName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`

const JobTitle = styled.h4`
  font-size: 1.25rem;
  margin: 0;
`

const SubText = styled.p`
  margin: 0;

  & > span {
    font-weight: bold;
    color: #F9ADAA;
  }

  &:first-of-type {
    margin-top: 20px;
  }
`

const MainInfo = ({ firstName, lastName, jobTitle, age, from, currentlyIn, gender, avatar, company, description }) => {
  const getAvatar = () => {
    if (avatar) return avatar
    else if (gender === "female") return placeholderFemale
    else if (gender === "male") return placeholderMale
  }

  return (
    <Wrapper>
      <Avatar src={getAvatar()} alt={`${firstName} ${lastName}'s picture`} />
      <TextWrapper>
        <MainTextWrapper>
          <FullName>{firstName} {lastName}</FullName>
          <JobTitle>{jobTitle} {company ? ` at ${company}` : null}</JobTitle>

          <SubText>
            <span>{age}</span> years old
        </SubText>
          <SubText>
            From <span>{from}</span>
          </SubText>
          <SubText>
            Currently in <span>{currentlyIn}</span>
          </SubText>
        </MainTextWrapper>

        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </TextWrapper>
    </Wrapper>
  )
}

export default MainInfo
