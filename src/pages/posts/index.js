import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Style } from "./Style";

export default function Posts() {
  const [post , setPost]  = useState(undefined);
    let { postID } = useParams();

    const getPost = () => {
    fetch(`http://192.168.100.6:3020/posts/${postID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setPost(result)
        })
        .catch((err) => console.log(err));
    }


    useEffect(() => {
      getPost();
    }, [])
      return (
        <div>
          { post &&  <img alt="imqge" src={`http://192.168.100.6:3020/${post.image.url}`} /> }
          {
            post && post.user_id === localStorage.getItem('userId') && (
              <div>
                <textarea />
                <button>update</button>
              </div>
            )
          }
        </div>
      )
}
