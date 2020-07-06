import React from 'react';
import "./sass/main.scss";
import Header from "./01_components/Header.component";
import Content from "./01_components/Content.component";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
