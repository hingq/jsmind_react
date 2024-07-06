import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./nav";
import Jsdom from "./jsdom";
import "./assets/app.css";
import Feedback from "./components/feedback";

const Err = () => {
  return (
    <>
      <p> nothing </p>
    </>
  );
};
export default function App() {
  return (
    <>
      <Router>
        {/* 所有路由都要嵌套在其中 */}
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/mind" element={<Jsdom />} />
          <Route path="*" element={<Err />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </>
  );
}
