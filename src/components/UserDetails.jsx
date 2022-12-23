import axios from 'axios';
import demoPic from "../assets/avatar.jpg";
import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

const UserDetails = ({ userDetails,setUserDetails,setLoading }) => {
   useEffect(() => {
     axios
       .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/1`)
       .then((data) => {
         if (userDetails.profile === undefined) {
           setUserDetails(data.data);
           data.data.avatar = demoPic;
           setLoading(false);
         }
       
        
       })
       .catch((error) => {
         console.log(error);
       });
   },[userDetails]);
  
  const { avatar, profile, jobTitle, Bio, createdAt } = userDetails;
  // const [ firstName,lastName,username,email]  = profile;
  console.log(avatar);
 
  return (
    <div className="p-3">
      <h2>User Details</h2>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{jobTitle}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;