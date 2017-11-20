import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

import {DiceMod} from './../../api/diceMod';
import {DiceResult} from './../../api/diceResult';

export class Dice extends React.Component{
  ///////////////////
  constructor(props){
    super(props);
    this.state = {
      owner: this.props.owner,
      d20: '',
      d20List: [],
      modifier: 0,
      isGM: ''
    };
  }//////////////////

  //*********************************mostly modifier dealings******************************************
  componentDidMount(){
    Tracker.autorun(() => {
      if (Meteor.user()) {
        Meteor.subscribe('diceMod', 'diceResult');
        const modifier = DiceMod.find().fetch()[0];
        const d20List  = DiceResult.find().fetch()[0];
        const d20ListTest  = DiceResult.find().fetch();
        console.log(!!d20ListTest )
        console.log(d20ListTest)

        isGM = Meteor.user().username === 'me'; //CHANGE CHANGE CHANGE IN FINAL VERSION
        modifier ? this.setState({ isGM, d20List ,modifier: modifier.modifier }) : this.setState({ isGM })
      }
    });
  }//***************************************************************************************************

  //*************************dice functions*************************************************************
  ///////modifier//////
  onModifierChange(e) {
    let modifier = e.target.value
    Meteor.subscribe('diceMod');
    const isData = DiceMod.find().fetch()[0]

    isData ? Meteor.call('diceMod.update', Meteor.userId(), modifier) : Meteor.call('diceMod.insert', Meteor.userId(), modifier)
  }
  ///////dice roll////
  roll() {
    let d20 = Math.floor(Math.random() * 20 + 1) + Number(this.state.modifier)
    Meteor.subscribe('diceResult');
    const isD20 = DiceResult.find().fetch()[0];
    const owner = this.state.owner;

    this.setState({ d20 })
    isD20 ? Meteor.call('diceResult.update', this.state.owner, d20) : Meteor.call('diceResult.insert', owner, d20)
 }//**********************************************************************************************************

  //////////////////////////////////////////////////////////////////////////////
  render(){
    return (
      <div>
        <button onClick={this.roll.bind(this)}>Roll +{this.state.modifier}</button>
        {this.state.d20}
        {this.state.isGM ? <input type="number" placeholder={0} onChange={this.onModifierChange.bind(this)} value={this.state.modifier}/> : 'change this later to gm, not me'}
      </div>
    );
  }
};/////////////////////////////////////////////////////////////////////////////

Dice.propTypes ={
  owner: PropTypes.string.isRequired
};

export default withTracker(() => {
  return {};
})(DiceMod);
