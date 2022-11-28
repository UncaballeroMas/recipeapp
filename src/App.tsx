import React from "react";
import "./styles/styles.scss";
import Navbar from "./component/navbar";
import Frontpage from "./component/frontPage";
import Footer from "./component/footer";
import Carousel from "./component/carousel";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <Frontpage />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
