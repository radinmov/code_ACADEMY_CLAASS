import styled from "styled-components";

export const Style = styled.div`
body {
    // background-image: linear-gradient(135deg, #fab2ff 10%, #1904e5 100%);
    background-image:url("https://img.freepik.com/premium-vector/banking-service-background-bank-building-icon-made-with-currency-symbols-dollar-euro-yen-pound-icons_127544-803.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: "Open Sans", sans-serif;
    color: #333333;
  }

  .box-form {
    margin: 0 auto;
    margin-top: 99px;
    width: 80%;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex: 1 1 100%;
    align-items: stretch;
    justify-content: space-between;
    box-shadow: 0 0 20px 6px #090b6f85;
  }
  @media (max-width: 980px) {
    .box-form {
      flex-flow: wrap;
      text-align: center;
      align-content: center;
      align-items: center;
    }
  }
  .box-form div {
    height: auto;
  }
  .box-form .left-2 {
    color: #ffffff;
    background-size: 50%;
    background-repeat: no-repeat;
    background-image: url("https://static.evand.net/images/organizations/logos/original/940c59562bf11bd4009ceed5477a6086.jpg?x-oss-process=image/resize,h_250");
    overflow: hidden;
  }
  .box-form .left-2 .overlay {
    padding: 30px;
    width: 100%;
    height: 100%;
    background: #5961f9ad;
    overflow: hidden;
    box-sizing: border-box;
  }
  .box-form .left-2 .overlay h1 {
    font-size: 10vmax;
    line-height: 1;
    font-weight: 900;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .box-form .left-2 .overlay span p {
    margin-top: 30px;
    font-weight: 900;
  }
  .box-form .left-2 .overlay span a {
    background: #3b5998;
    color: #ffffff;
    margin-top: 10px;
    padding: 14px 50px;
    border-radius: 100px;
    display: inline-block;
    box-shadow: 0 3px 6px 1px #042d4657;
  }
  .box-form .left-2 .overlay span a:last-child {
    background: #1dcaff;
    margin-left: 30px;
  }
  .box-form .right-2 {
    padding: 40px;
    padding-top: 50px;
    overflow: hidden;
  }
  @media (max-width: 980px) {
    .box-form .right {
      width: 100%;
    }
  }
  .box-form .right-2 h5 {
    font-size: 6vmax;
    line-height: 0;
    padding: 70px;
  }
  .box-form .right-2 p {
    font-size: 14px;
    color: #b0b3b9;
  }
  .box-form .right-2 .inputs {
    overflow: hidden;
  }
  .box-form .right-2 input {
    width: 100%;
    padding: 10px;
    margin-top: 25px;
    font-size: 16px;
    border: none;
    outline: none;
    border-bottom: 2px solid #b0b3b9;
  }
  .box-form .right-2 .remember-me--forget-password {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box-form .right-2 .remember-me--forget-password input {
    margin: 0;
    margin-right: 7px;
    width: auto;
  }
  .box-form .right-2 button {
    float: right;
    color: #fff;
    font-size: 16px;
    padding: 12px 35px;
    border-radius: 50px;
    border: 0;
    outline: 0;
    margin-top: 32px;
  }

  label {
    display: block;
    position: relative;
    margin-left: 30px;
  }

  label::before {
    content: " \f00c";
    position: absolute;
    font-family: FontAwesome;
    background: transparent;
    border: 3px solid #70f570;
    border-radius: 4px;
    color: transparent;
    left: -30px;
    transition: all 0.2s linear;
  }

  label:hover::before {
    font-family: FontAwesome;
    content: " \f00c";
    color: #fff;
    cursor: pointer;
    background: #70f570;
  }

  label:hover::before .text-checkbox {
    background: #70f570;
  }

  label span.text-checkbox {
    display: inline-block;
    height: auto;
    position: relative;
    cursor: pointer;
    transition: all 0.2s linear;
  }

  label input[type="checkbox"] {
    display: none;
  }
`
