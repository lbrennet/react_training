import React from 'react';
import axios from 'axios';
export default class PersonList extends React.Component {
  state = {
    personnes: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const personnes = res.data;
        this.setState({ personnes });
      })
  }
// sans axios avec Fetch
 //  fetchUsers() {
 //   fetch(`https://jsonplaceholder.typicode.com/users`)
 //     .then(response => response.json())
 //     .then(data =>
 //       this.setState({
 //         personnes: data,
 //         isLoading: false,
 //       })
 //     )
 //     .catch(error => this.setState({ error, isLoading: false }));
 // }
 //
 // componentDidMount() {
 //   this.fetchUsers();
 // }

  render() {
    return (
      <ul>
        { this.state.personnes.map(personnes => <><li key="personnes.email">{personnes.email}</li><li key="personnes.id">{personnes.username}</li><li key="personnes.geo.lat">https://{personnes.website}</li></>)}
      </ul>
    )
  }
}
