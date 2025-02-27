import React from "react";

import "../style/settings.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

// import { Link } from 'react-router-dom';

export default function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  //   const [profilePic, setProfilePic] = useState("");
 const user = useSelector(state => state.user.userInfo);
 console.log("settings", user.data._id);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await axios.patch(
        "http://127.0.0.1:5500/api/v1/users/update-personal-account",
        { username, email }
      );
      console.log(updatedUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <form className="settingsForm" onSubmit={handleUpdate}>
          <label className="settingsProfileLabel">
            <strong>Profile Settings</strong>
          </label>
          <div className="settingsProfile">
            <img
              className="settingsPPic"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
            />
            <label htmlFor="inputfile">
              <i className="settngsUpdatepp fa-solid fa-user-plus"></i>
            </label>
            <input type="file" id="inputfile" className="setttingsInputFile" />
            <label>Username</label>
            <input
              type="text"
              placeholder='eg: "pablo"'
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="pablo@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input type="password" />
          </div>
          <button className="settingsProfileUpdate">Update</button>
        </form>
        <div className="settingsPrivacy">
          <span className="settingsDelete">Delete Account</span>
          <span className="TndC">Terms & Conditions</span>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
