// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "James Bond", position: "Agent" },
    { number: 2, name: "Mrs Moneypenny", position: "Assistante Espion" },
    { number: 3, name: "M", position: "Chef" },
    { number: 4, name: "Felix Leiter", position: "Agent CIA" },
    { number: 5, name: "Madeleine Swann", position: "James Bond Girl" },
    { number: 6, name: "Vesper Lynn", position: "James Bond Girl" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI
