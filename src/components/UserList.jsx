import React from 'react';
import demoPic from '../assets/avatar.jpg'
const UserList = ({ userList,  handleUserList }) => {
  return (
    <div className="p-3">
      <h2 className="bg-primary mb-5 p-3">User List</h2>
      {userList.map((user) => (
        <div
          key={user.id}
          className="text-align-start"
          onClick={() => handleUserList(user.id)}
        >
          {console.log(user.avatar + "pic")}
          <h2 className="text-start h4 bg-secondary p-2 rounded">
            {" "}
            <img
              className="img-fluid rounded-circle me-3"
              style={{ width: "60px", height: "60px" }}
              src={demoPic}
              alt=""
            />
            {user.profile.firstName}
            {user.profile.lastName}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;