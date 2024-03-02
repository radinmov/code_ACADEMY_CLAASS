import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Style } from "./Style";

export default function Posts() {
  const [post , setPost]  = useState(undefined);
  const [comment  ,setComment ]  =useState();

    let { postID } = useParams();
    const putData = () => {
      let data = JSON.stringify({
        description: comment
    })

      fetch(`http://192.168.100.5:3020/posts/${postID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body:data
    })
    .then(response => response.json)
    .then(result => console.log("ok"))
    }
    const getPost = () => {
    fetch(`http://192.168.100.5:3020/posts/${postID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setPost(result);
            setComment(result.description)
        })
        .catch((err) => console.log(err));
    }


    useEffect(() => {
      getPost();
    }, [])
      return (
        <div>
          
          { post &&  <img alt="images" src={`http://192.168.100.5:3020/${post.image.url}`} /> }
          {
            post && post.user_id == localStorage.getItem('Id') && (
              <div>
                <textarea value={comment} onChange={(e) => {
                  setComment(e.target.value);
                }} />
                <button onClick={putData}>update</button>
                {/* bgr bgrbh */}
              </div>
            )
          }
        </div>
      )
}
