import "./styles.css";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}
