import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Style } from "./Style";

export default function Account() {
  let { userId } = useParams();

  const loadData = () => {
    fetch(`http://192.168.100.6:3020/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadData();
  }, []);
  return <Style></Style>;
}
