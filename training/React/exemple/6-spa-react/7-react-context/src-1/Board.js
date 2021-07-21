import React from 'react';
import Topics from './Topics';

import { number } from 'prop-types';

const topics = [
  {
    id: 1,
    title: ' Goldfinger ',
    posts: [
      {
        id: 11,
        _user: {
          _id: 22,
          username: 'Sean Connery'
        },
        message: `Ma chère petite, il y a des choses qui ne se font pas.
        Tel que de boire du Dom Perignon 55 à une température
        au dessus de 3 degrés`
      },
     {
        id: 12,
        _user: {
          _id: 23,
          username: 'James Bond'
        },
        message: `Un homme qui possède du Dom Pérignon cuvée 53
        n'est pas completement mauvais`
      },
      {
        id: 13,
        _user: {
          _id: 24,
          username: 'M'
        },
        message: `Mr Bond, je pense que vous êtes un dinosaure sexiste et misogyne,
        une relique de la Guerre Froide`
      },
    ]
  },
  {
    id: 2,
    title: 'Les jeux vidéos sont trop violents',
    posts: [
      {
        id: 113,
        _user: {
          _id: 22,
          username: 'John Doe'
        },
        message: 'Vous devriez essayer la boxe thai.'
      },
     {
        id: 123,
        _user: {
          _id: 23,
          username: 'James Bond'
        },
        message: 'My name is ...'
      },
      {
        id: 133,
        _user: {
          _id: 24,
          username: 'Miss Moneypenny'
        },
        message: 'message 4'
      },
    ]
  }
];

export const BoardContext = React.createContext({
  currentUser: null,
});

class Board extends React.PureComponent {
  render() {
    const { props: { currentUser } } = this;

    return (
      <BoardContext.Provider value={{ currentUser }}>
        <Topics topics={topics} />
      </BoardContext.Provider>
    );
  }
}

Board.propTypes = {
  currentUser: number,
};

export default Board;
