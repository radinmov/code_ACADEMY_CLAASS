
import { useState } from "react";
import { Style } from "./Style";
import { Link } from "react-router-dom";
export default function Register() {
    const [userName, setUser] = useState();
    const [pas, setPasCode] = useState();
    const [loading, setLoading] = useState(false);

    function post() {
    
        var data = JSON.stringify({
          username: userName,
          password: pas,
        });
        fetch("http://192.168.100.6:4005/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        })
        .then((response) => response.json())
        .then((resualt) => console.log(resualt))
    }
    return (
        <Style>
          <div className="box-form">
            <div className="left-2">
              <div className="overlay">
                <h1>Code Academy</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  et est sed felis aliquet sollicitudin
                </p>
              </div>
            </div>
    
            <div className="right-2">
              <h5>Register</h5>
              <h3>Alborz Develop part</h3>
              <div className="inputs">
                <input
                  className="int"
                  type="text"
                  onChange={(e) => {
                    setUser(e.target.value)
                  }}
                  placeholder="user name"
                />
    
                <input
                  type="password"
                  onChange={(e) => {
                    setPasCode(e.target.value)
                  }}
                  placeholder="password"
                />
              </div>
              <button className="btn bg-cyan-500 " onClick={post}>
              {loading ? "Loading...." : "Login"}
              </button>
              <Link className="text-white" to={"/"}>Register/</Link>
              <Link className="text-white" to={"/login"}>Login</Link>
            </div>
          </div>
        </Style>
      );
}
