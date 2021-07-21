import React from 'react';
import axios from 'axios';
export default class BeersList extends React.Component {
  state = {
    beers: []
  }

  //sans axios avec Fetch
    fetchBeers() {
     fetch(`https://api.punkapi.com/v2/beers`)
       .then(response => response.json())
       .then(data =>
         this.setState({
           beers: data,
           isLoading: false,
         })
       )
       .catch(error => this.setState({ error, isLoading: false }));
   }

   componentDidMount() {
     this.fetchBeers()
   }

  // avec axios
  // componentDidMount() {
  //   axios.get(`https://api.punkapi.com/v2/beers`)
  //     .then(res => {
  //       console.log(res.data[0].image_url)
  //       const beers = res.data;
  //       this.setState({ beers });
  //     })
  // }
  render() {
    const myList = () => {
      return (
          <>
        { this.state.beers.map(beers =>

          <li key={beers.id}><b>{beers.name}</b><br />
          <img src={beers.image_url} alt="new" height="180px" /><br />
          <p>{beers.description}</p></li>

        )}</>
      )
    }
    return (
      <ul>
      { myList() }
      </ul>
    )
  }
}