import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Profile = () => {
  const { data } = useQuery(QUERY_ME);
  
  const { username, email } = data.me;

  console.log(`username: ${username}, email: ${email}`);

  return (
    <div>
      <h1>Profile</h1>
      <p>username: {username}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Profile;