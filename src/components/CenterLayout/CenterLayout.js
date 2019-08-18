import React from "react"
import styled from "styled-components"

import { Avatar } from "components/CenterLayout/Avatar"
import { DevName } from "components/CenterLayout/DevName"
import { DevTitles } from "components/CenterLayout/DevTitles"
import { SocialMedia } from "components/CenterLayout/SocialMedia"
import placeholderMale from "assets/placeholder_male.svg"
import placeholderFemale from "assets/placeholder_female.svg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 880px) {
    margin-bottom: 16px;
  }
`

const DevJob = styled.h2`
  color: white;
  font-size: 1.25rem;
  margin: 0;

  & > span {
    color: #F6AE2D;
  }
`

const CenterLayout = ({ avatar, gender, firstName, lastName, age, from, currentlyIn, portfolioUrl, devUrl, githubUrl, twitterUrl, linkedinUrl, company, jobTitle }) => {
  const getAvatar = () => {
    if (avatar) return avatar
    else if (gender === "female") return placeholderFemale
    else if (gender === "male") return placeholderMale
  }

  return (
    <Wrapper>
      <Avatar src={getAvatar()} alt={`${firstName} ${lastName}'s picture`} />

      <DevName>{firstName} {lastName}</DevName>

      <DevJob>
        {jobTitle} {company ? "at" : null} <span>{company}</span>
      </DevJob>

      <DevTitles>
        <span>{age}</span> years old
      </DevTitles>
      <DevTitles>
        From <span>{from}</span>
      </DevTitles>
      <DevTitles>
        Currently in <span>{currentlyIn}</span>
      </DevTitles>

      <SocialMedia
        portfolioUrl={portfolioUrl}
        devUrl={devUrl}
        githubUrl={githubUrl}
        twitterUrl={twitterUrl}
        linkedinUrl={linkedinUrl}
      />
    </Wrapper>
  )
}

export default CenterLayout
