import { React, useState, useEffect } from "react";
import TableView from "./TableView";
import axios from "axios";

const UserLastNameM = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      await axios
        .get("http://localhost:8080/api/v1/route3")
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getUsers();
  }, []);

  return <>
  {isLoading ?<h1>Loading...</h1> : <TableView users={users} />}
  </>;
};

export default UserLastNameM;
