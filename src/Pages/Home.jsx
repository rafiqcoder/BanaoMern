import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Placeholder, Row, Spinner } from "react-bootstrap";
import UserDetails from "../components/UserDetails";
import UserList from "../components/UserList";
import demoPic from "../assets/avatar.jpg";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
      .then((data) => {
       
          setUserList(data.data);
          setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
    
  if ( loading) {
    return <Spinner animation="border" variant="primary" />;

  }
    

    const handleUserList = (id:1) => {
        setLoading(true);
        console.log(id);
       
           
            axios
              .get(
                `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}` )
              .then((data) => {
                data.data.avatar=demoPic;
                setUserDetails(data.data);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
             
             
              });
       
  }

    console.log();
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <UserList
            userList={userList}
            setLoading={setLoading}
            handleUserList={handleUserList}
          ></UserList>
        </Col>
        <Col>
          <UserDetails
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setLoading={setLoading}
          ></UserDetails>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
