import React from 'react';
import UserLabel from './UserLabel.jsx';

const UserDetails = props => {
  return (
    <UserLabel
      labelText = {props.username}
    />
    );
}

export default UserDetails;