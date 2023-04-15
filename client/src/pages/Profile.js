import React from 'react';
import UpdateUsername from '../components/UpdateUsername';
import UpdateEmail from '../components/UpdateEmail';
import UpdatePassword from '../components/UpdatePassword';
import DisplayUserData from '../components/DisplayUserData';

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