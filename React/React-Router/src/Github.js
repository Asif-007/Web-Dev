import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github() {
  const { name } = useParams();
  console.log(name)
  const [profile, setProfile] = useState(null);
  async function fetchUser() {
    const resposne = await fetch(`https://api.github.com/users/${name}`);
    const data = await resposne.json();
    setProfile(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <h1> Github Profile</h1>
      <div>
        <img src={profile?.avatar_url} />
        <h2>{profile?.login}</h2>
      </div>
    </>
  );
}
