import { useParams } from "react-router-dom";

export default function Link() {
  let params = useParams();
  return (
    <h2>
      Name: {params.friendsId}
    </h2>
  );
}
