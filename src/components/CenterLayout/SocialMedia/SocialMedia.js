import React from "react"
import styled from "styled-components"

import linkedin from "./icons/linkedin.svg"
import portfolio from "./icons/portfolio.svg"
import twitter from "./icons/twitter.svg"
import github from "./icons/github.svg"
import dev from "./icons/dev.jpg"

const Wrapper = styled.div`
  display: flex;
`

const Link = styled.a`
  width: 45px;
  height: 45px;
  margin: 8px;
`

const DevIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`

const SocialMedia = ({ portfolioUrl, devUrl, githubUrl, twitterUrl, linkedinUrl }) => {
  return (
    <Wrapper>
      {
        portfolioUrl ?
          <Link href={portfolioUrl}>
            <img src={portfolio} alt="portfolio link" />
          </Link> : null
      }
      {
        twitterUrl ?
          <Link href={twitterUrl}>
            <img src={twitter} alt="twitter link" />
          </Link> : null
      }
      {
        githubUrl ?
          <Link href={githubUrl}>
            <img src={github} alt="github link" />
          </Link> : null}
      {
        linkedinUrl ?
          <Link href={linkedinUrl}>
            <img src={linkedin} alt="linkedin link" />
          </Link> : null
      }
      {
        devUrl ?
          <Link href={devUrl}>
            <DevIcon src={dev} alt="dev link" />
          </Link> : null
      }
    </Wrapper>
  )
}

export default SocialMedia
