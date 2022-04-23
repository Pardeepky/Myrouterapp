import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h2>Pardeep kumar</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/friends">Friends</Link> | <Link to="/hobbies">Hobbies</Link>{" "}
        | <Link to="/traveldestination">Travel destination</Link>
      </nav>
      <Outlet />
    </div>
  );
}
