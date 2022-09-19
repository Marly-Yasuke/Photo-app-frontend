import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user?username=" + params.username)
      .then((res) => {
        setUser(res.data[0]);
      });
  }, [params.username]);

  if (!user) return <div>No profile</div>;
  return (
    <div>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user._id}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
