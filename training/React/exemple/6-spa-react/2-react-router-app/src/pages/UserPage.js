import React, { useState, useEffect } from 'react'
//import axios from 'axios'

export default function UserPage(props) {
  const initialUserState = {
    user: {},
    loading: true,
  }
  const [user, setUser] = useState(initialUserState)

  useEffect(() => {
  // avec axios
    // const getUser = async () => {
    //   const { data } = await axios(`https://api.github.com/users/${props.match.params.userName}`)
    //     console.info(data)
    //   setUser(data)
    // }
    async function getUser()
    {
      let response = await fetch(`https://api.github.com/users/${props.match.params.userName}`);
      let data = await response.json()
      setUser(data)
    }
    getUser()
    }, [props.match.params.userName])

  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{props.match.params.userName}</h1>

      <table>
        <thead>
          <tr>
           <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Create</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.blog}>{user.blog}</a>
            </td>
            <td>{user.created_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
