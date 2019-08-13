import React from "react"
import { MainInfo } from "components/SpotlightInfo/MainInfo"
import { Highlights } from "components/SpotlightInfo/Highlights"

import {
  firstName,
  lastName,
  jobTitle,
  age, from,
  currentlyIn,
  gender,
  avatar,
  company,
  description
} from "data/spotlightData.json"

const SpotlightInfo = () => {
  return (
    <>
      <MainInfo
        firstName={firstName}
        lastName={lastName}
        jobTitle={jobTitle}
        age={age} from={from}
        currentlyIn={currentlyIn}
        gender={gender}
        avatar={avatar}
        company={company}
        description={description}
      />

      <Highlights firstName={firstName} />
    </>
  )
}

export default SpotlightInfo
