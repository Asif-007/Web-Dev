import { useCallback, useEffect, useState } from "react";
import useFetch from "./useFetch";

function Body() {
  console.log('Body first');
  const {
    setnoOfProfile,
    listToShow,
    searchSpecificUser,
    generateProfile,
    setUser,
    noOfProfile,
    user,
  } = useFetch();
  console.log('Body second');
  return (
    <div className="but">
      <input
        type="text"
        className="inpu"
        placeholder="Search here"
        value={noOfProfile}
        onChange={(e) => {
          setnoOfProfile(e.target.value);
        }}
      ></input>
      <button onClick={generateProfile}>Search Profile</button>
      <input
        className="inpu"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Search by user "
      ></input>
      <button onClick={searchSpecificUser}>Search GitHub Global</button>
      <div className="profile">
        {listToShow.map((value) => {
          return (
            <div key={value.id} className="cards">
              <img src={value.avatar_url}></img>
              <h2>{value.login}</h2>
              <a href={value.html_url}>Profile</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;

// Try catch functionality
//  useCallback function
// Search based on username
