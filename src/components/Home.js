import React from "react";
import { Header, Button } from "../helpers/importer.js";

function Home() {
  return (
    <>
      <Header />
      <p className="home__text">
        This is a quiz about HTML, CSS and JavaScript, that can be used to
        repeat all the basics that are needed in everyday's life of a web
        developer.
        <br />
        <br />
        Find out if you know all the details!
      </p>
      <Button>Let's have fun!</Button>
    </>
  );
}

export default Home;
