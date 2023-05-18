import { useParams } from "react-router-dom";

export function AccountProfileComponet() {
  const { username } = useParams();

  return (
    <>
      <h2>Account profile</h2>
      <p>Username: {username}</p>
    </>
  );
}
