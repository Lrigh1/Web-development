import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';
//meteor npm install react-addons-pure-render-mixin --save  (lets the next line happen)
//meteor add react-meteor-data to use creat container
import { withTracker } from 'meteor/react-meteor-data';

export const PublicHeader = (props) => {

  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.greeting}</h1>
      </div>
    </div>
  );
};
//////////////////////////////////////////////////////////////////////
PublicHeader.propTypes ={
  greeting: PropTypes.string.isRequired
};

export default withTracker(() => {
  return { greeting: 'The Cross Map Townsmanship Officionados Club welcomes you to Terraria!' };
})(PublicHeader);
