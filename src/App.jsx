import Navbar from "./Compnents/Navbar";
import HomePage from "./routes/homePage";
import "./index.scss";
import "./layout.scss";
function App() {
  return (
    <>
      <div className="Layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <HomePage />
        </div>
      </div>
    </>
  );
}
export default App;
