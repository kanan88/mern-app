import React from "react";

import UsersList from "../components/UsersList";

const users = [
  {
    id: "u1",
    name: "Ken Farzali",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFhs5L2vT3mBg/profile-displayphoto-shrink_100_100/0/1562207797477?e=1623283200&v=beta&t=rn3mYgJ9UeLMt_1gAOOoH4bb-E-itFu9GgGRNeN68-g",
    placeCount: 5,
  },
];

const Users = () => {
  return <UsersList items={users} />;
};

export default Users;
