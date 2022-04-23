import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Hobbies from "./routes/Hobbies";
import Destination from "./routes/Traveldestination";
import Link from "./routes/FriendDetail";
import Friends from "./routes/Friends";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="traveldestination" element={<Destination />} />
        <Route path="friends" element={<Friends />}>
          <Route path=":friendsId" element={<Link />} />

          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a friend</p>
              </main>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
