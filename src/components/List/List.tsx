import React from "react";
import {UserType} from "../state/state";
import s from './List.module.css'

type PropsType = {
  users: Array<UserType>
}

export const List = ({users}: PropsType) => {
  const Fade = require("react-reveal/Fade");
  return (
    <ol>{users.map((user, index) =>
      <Fade bottom duration={3000} key={index}>
        <li className={s.item}>{user.name} {user.surname}</li>
      </Fade>
    )}
    </ol>
  )
}