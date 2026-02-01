import { useState, useCallback, useEffect } from "react";

export default function useFetch() {
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
  console.log("Hook");

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
  const listToShow = derivedState.length != 0 ? derivedState : profile;
  return {
    setnoOfProfile,
    listToShow,
    searchSpecificUser,
    generateProfile,
    setUser,
    noOfProfile,
    user,
  };
}
