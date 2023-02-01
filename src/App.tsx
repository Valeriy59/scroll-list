import React, {useEffect, useState} from 'react';
import './App.css';
import {List} from "./components/List/List";
import {users, UserType} from "./components/state/state";

function App() {
  const itemsPerPage = 20;
  const [usersCount, setUsersCount] = useState(itemsPerPage);
  const [usersPerPage, setUsersPerPage] = useState<Array<UserType>>([])

  useEffect(() => {
    fetchUsers()
  },[usersCount])

  const fetchUsers = () => {
    let usersFetched = [] as Array<UserType>
    for (let i = 0; i < usersCount; i++) {
      usersFetched.push(users[i])
    }
    setUsersPerPage(usersFetched)


  }
  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  },)

  const handleScroll = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight
    const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
    if (currentHeight + 10 >= scrollHeight) {
      if (usersCount < users.length) {
        setUsersCount(usersCount + itemsPerPage)
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <List users={usersPerPage}/>
      </header>
    </div>
  );
}

export default App;
