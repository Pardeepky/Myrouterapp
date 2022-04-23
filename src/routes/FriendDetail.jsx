import { useParams } from "react-router-dom";
import { useState } from "react";

const getLocalStorage = () => {
  let friends = localStorage.getItem("list3");
  if (friends) {
    return JSON.parse(localStorage.getItem("list3"));
  } else {
    return [];
  }
};

export default function Link() {
  let params = useParams();
  const [friends, setFriends] = useState(getLocalStorage());
  let obj = friends.find((data) => data.id === params.friendsId);
  return (
    <h2>
      Name: {obj.Name} | Age: {obj.Age}
    </h2>
  );
}
