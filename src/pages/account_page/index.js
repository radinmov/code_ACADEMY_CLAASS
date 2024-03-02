import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Style } from "./Style";

export default function Account() {
  let { userId } = useParams();
  const [data ,  setData]  = useState([]);

  const loadData = () => {
    fetch(`http://192.168.100.5:3020/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        console.log(result)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
   <Style>
    {data.length > 0 && data.map((item , index) => {
      return (
        <div key={index}>
          <h2>{item.user}</h2>
          <img alt="img" src={`http://192.168.100.5:3020/${item.image.url}`} />
          <div>{item.description}</div>
          <div>{item.data}</div>
    
        </div>
      )
    
    })}
    
  </Style>
  )
}
