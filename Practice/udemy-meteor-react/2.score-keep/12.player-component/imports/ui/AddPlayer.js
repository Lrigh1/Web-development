import React from 'react';

import {Players} from './../api/players';

export default class AddPlayer extends React.Component{
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    //doesnt let page reload
    e.preventDefault();

    if (playerName){
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  //////////////////////////////////////////////////
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
  }
};
