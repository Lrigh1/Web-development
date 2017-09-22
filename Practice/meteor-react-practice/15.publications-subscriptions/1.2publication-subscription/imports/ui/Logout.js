import React from 'react';

import {Links} from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink'

export default class Logout extends React.Component{

  render(){
    return(
      <div>
        <PrivateHeader title="Your links from Logout!"/>
        <AddLink />
        <LinksList />
      </div>
    );
  }
}
