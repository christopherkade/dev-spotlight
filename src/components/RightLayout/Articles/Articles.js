import React from "react"
import styled from "styled-components"

import { Title } from "components/common/Title"

const ArticlesWrapper = styled.div`
  margin-top: 24px;
`

const ArticleWrapper = styled.div`
  margin-bottom: 18px;
  color: white;
`

const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  margin: 4px;

  &:hover {
    opacity: 0.8;
  }
`

const ArticleLink = styled.a`
  color: #E0E0E2;
`

const Articles = ({ articles }) => {
  return (
    <ArticlesWrapper>
      {articles && articles.length > 0 ? <Title>Any articles you'd like to share?</Title> : null}

      {articles && articles.map(article => {
        return (
          <ArticleWrapper key={article.title} >
            <ArticleLink href={article.link}>
              <ArticleTitle>
                {article.title}
              </ArticleTitle>
            </ArticleLink>
          </ArticleWrapper>
        )
      })}
    </ArticlesWrapper>
  )
}

export default Articles
