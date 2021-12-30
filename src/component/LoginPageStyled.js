import styled from "styled-components";
export const LoginPageStyled = styled.form`
  background: #ecf0f3;

  .wrapper {
    max-width: 350px;
    min-height: 500px;
    margin: 100px auto;
    padding: 40px 30px 30px 30px;
    background-color: #ecf0f3;
    border-radius: 15px;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
  }

  .logo {
    width: 200px;
    margin: auto;
  }

  .logo img {
    width: 90%;
    height: 50px;
    object-fit: cover;
    border-radius: 10%;
    box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3,
      8px 8px 15px #a7aaa7, -8px -8px 15px #fff;
  }

  .wrapper .name {
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 1.3px;
    padding-left: 10px;
    color: #555;
  }

  .wrapper .form-field input {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    background: none;
    font-size: 1.2rem;
    color: #666;
    padding: 10px 15px 10px 10px;
  }

  .wrapper .form-field {
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
  }

  .wrapper .form-field .fas {
    color: #555;
  }

  .wrapper .btn {
    box-shadow: none;
    width: 100%;
    height: 40px;
    background-color: #03a9f4;
    color: #fff;
    border-radius: 25px;
    box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
    letter-spacing: 1.3px;
  }

  .wrapper .btn:hover {
    background-color: #039be5;
  }

  .or {
    margin: 8px;
    text-align: center;
    font-size: 1.2rem;
    color: #03a9f4;
  }

  .wrapper a:hover {
    color: #039be5;
  }
`;
