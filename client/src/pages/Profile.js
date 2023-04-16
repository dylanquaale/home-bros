import React from 'react';
import UpdateUsername from '../components/UpdateUsername';
import UpdateEmail from '../components/UpdateEmail';
import UpdatePassword from '../components/UpdatePassword';
import DisplayUserData from '../components/DisplayUserData';
// component Profile displays the users data contaning all the updates
const Profile = () => {

  return (
    <>
    < DisplayUserData />

    < UpdateUsername />

    < UpdateEmail />

    < UpdatePassword />

    </>
  );
};

export default Profile;
