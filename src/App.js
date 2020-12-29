import React, { useState } from "react";
import {
  Card,
} from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import "./App.css";
import Input from "./components/Input";
import Userdetails from "./components/Userdetails";



function App() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [click, setClick] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
      setClick(true);
    }
   
    
  };
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <h1>
            Github Profile Finder :) <Github />
          </h1>
        </Card.Header>
        <Input
          onChangeHandlerProp={onChangeHandler}
          submitHandlerProp={submitHandler}
          usernameProp={username}
        />

        
        {click  ? (
          <Userdetails data={data} repositories={repositories} />
        ) : null}

        <Card.Footer className="text-muted">By Ankit Jangir</Card.Footer>
      </Card>
    </>
  );
}

export default App;
