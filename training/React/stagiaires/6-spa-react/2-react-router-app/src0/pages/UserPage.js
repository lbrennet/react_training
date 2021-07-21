import React, { useState, useEffect } from 'react'
import axios from 'axios'

//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
//à vous
  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{props.match.params.id}</h1>

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
