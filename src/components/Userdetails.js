import React from 'react'
import {
    Card,
    Row,
    Col,
  } from "react-bootstrap";
  import { PeopleFill } from "react-bootstrap-icons";
  import { JournalBookmarkFill } from "react-bootstrap-icons";

function Userdetails(props) {

    return (
        <>
            <Row>
          <Col sm={4}>
            <Card border="light" style={{ width: "18rem", marginLeft: "65px" }}>
              <Card.Img
                variant="top"
                src={props.data.avatar_url}
                style={{ borderRadius: "50%" }}
              />
              <Card.Body>
                <h2>{props.data.name}</h2>
                <Card.Title>{props.data.login}</Card.Title>
                <Row>
                  <Col>
                    <PeopleFill /> <strong>{props.data.following}</strong> Following
                  </Col>
                  <Col>
                    <PeopleFill /> <strong>{props.data.followers}</strong> Followers
                  </Col>
                </Row>
                <Col>
                  <JournalBookmarkFill /> <strong>{props.repositories.length}</strong>{" "}
                  Repositories
                </Col>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={8}>
            {props.repositories.map((repo) => {
              return (
                <Card key={repo.id} >
                  <Card.Body>
                    <Card.Title>
                      <JournalBookmarkFill />{" "}
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                      </a>
                    </Card.Title>
                    <p>Updated on {repo.updated_at.substring(0, 10)}</p>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
        </>
    )
}

export default Userdetails
