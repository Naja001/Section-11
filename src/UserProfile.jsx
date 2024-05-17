import { useState, useEffect } from "react";

export default function UserProfile() {
  const [userValue, setUserValue] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUserValue(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  useEffect(() => {
    if (userValue) {
      document.title = userValue.name;
    }
  }, [userValue]);

  if (!userValue) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>{userValue.name}</h1>
      <p>Email: {userValue.email}</p>
      <p>
        Address: {userValue.address.street}, {userValue.address.city}
      </p>
    </>
  );
}
