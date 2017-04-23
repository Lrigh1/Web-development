import React from 'react';
import PropTypes from 'prop-types';

import AddPlayer from './AddPlayer';
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <TitleBar title={this.props.title} subtitle="this is a subtitle" />
        <PlayerList players={this.props.players} />
        <AddPlayer />
      </div>
    );
  }
};
//////////////////////////////
App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
