import { useCallback, useEffect, useState } from "react";

function Body() {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState([]);
  const [noOfProfile, setnoOfProfile] = useState("");
  const [filter, setFilter] = useState(false);
  const generateProfile = useCallback(async () => {
    try {
      const ran = Math.floor(Math.random() * 1000);
      const response = await fetch(
        `https://api.github.com/users?since=${ran}&per_page=${noOfProfile}`,
      );
      if (!response.ok) throw new Error("Data is not fetched");
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      console.log(err.message);
      setProfile([]);
    }
  }, [noOfProfile]);
  useEffect(() => {
    generateProfile();
  }, []);
  const derivedState = profile.filter((value) => {
    return value.login.toLowerCase().includes(user.toLowerCase());
  });
    const searchSpecificUser = async () => {
      if (!user) return;

      try {
        const response = await fetch(`https://api.github.com/users/${user}`);

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();

        // We wrap the single user in an array [data]
        // so that .map() still works in your JSX!
        setProfile([data]);
        setFilter(false); // Reset filter so it shows our new result
      } catch (err) {
        alert(err.message);
      }
    };
  const listToShow = derivedState.length!=0 ? derivedState : profile;
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
