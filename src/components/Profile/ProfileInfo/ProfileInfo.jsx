import React from "react"
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
      <div>
          <div>
          <img src='https://ychef.files.bbci.co.uk/976x549/p05xhy8l.jpg'/>
          </div>       
          <div className={s.description}>
          ava+description
          </div>
      </div>
    )
}

export default ProfileInfo;