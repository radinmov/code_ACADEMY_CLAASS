import { useEffect, useState } from "react";
import { Style } from "./Style";
import { Link } from "react-router-dom";

export default function Home() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState();
  const [visi, setVisi] = useState();
  const [des, setDes] = useState();

  const loadData = () => {
    fetch("http://46.100.94.88:3020/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setImages(result);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadData();
  }, []);
  const sendData = () => {
    let data = new FormData();
    data.append("image", file);
    data.append("description", des);
    data.append("visibility", visi);
    fetch("http://46.100.94.88:3020/posts", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: data,
    })
      .then((r) => r.json())
      .then((res) => loadData());
  };
  const deletData = (id) => {
    fetch(`http://192.168.100.6:3020/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => loadData());
  };

  return (
    <Style>
      <div>
        <input
          className=""
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
        />
        <button className="name" onClick={sendData}>
          send images
        </button>
        <input
          type="text"
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <p>public</p>
        <input
          type="radio"
          name="visibility"
          onChange={(e) => {
            setVisi(1);
          }}
        />
        <p>private</p>
        <input
          type="radio"
          name="visibility"
          onChange={(e) => {
            setVisi(0);
          }}
        />
        {images.length > 0 &&
          images.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/account/${item.user_id}`}>{item.user}</Link>
                <Link to={`/posts/${item.id}`}>{item.id}</Link>
                <Link to={`/posts/${item.id}`}>
                  <img
                    alt="img"
                    className="w-52 "
                    src={`http://192.168.100.5:3020${item.image.url}`}
                  />
                </Link>
                <button onClick={() => deletData(item.id)}>delete</button>
              </div>
            );
          })}
      </div>
    </Style>
  );
}
