import React from "react";
import "./styles/styles.scss";
import Navbar from "./component/navbar";
import Frontpage from "./component/frontPage";
import Recipe from "./component/recipe";
import Footer from "./component/footer";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <Frontpage />
      <Recipe />
      <Footer />
    </div>
  );
}

export default App;
