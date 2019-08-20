import React from "react"
import styled from "styled-components"

import { Title } from "components/common/Title"

const ProjectWrapper = styled.div`
  margin-bottom: 18px;
  color: white;
`

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin: 4px;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`

const ProjectDescription = styled.p`
  margin: 0;
`

const ProjectLink = styled.a`
  color: #E0E0E2;
`

const Projects = ({ projects }) => {
  return (
    <>
      {projects && projects.length > 0 ? <Title>What's your top 3 personal projects?</Title> : null}

      {projects && projects.map(project => {
        return (
          <ProjectWrapper key={project.title} >
            <ProjectLink href={project.link}>
              <ProjectTitle>
                {project.title}
              </ProjectTitle>
            </ProjectLink>
            <ProjectDescription>
              {project.description}
            </ProjectDescription>
          </ProjectWrapper>
        )
      })}
    </>
  )
}

export default Projects
