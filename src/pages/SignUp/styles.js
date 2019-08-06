import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 15px;
    color: ${props => props.theme.main};
  }
  p {
    width: 100%;
    color: ${props => props.theme.main};
    margin-bottom: 15px;
    border: 1px solid ${props => props.theme.main};
    padding: 10px;
    text-align: center;
  }
  input {
    flex: 1;
    width: 100%;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    border: 1px solid #ddd;

    &::placeholder {
      color: #999;
    }
  }
  button {
    width: 100%;
    height: 56px;
    background: ${props => props.theme.main};
    color: #fff;
    font-size: 16px;
    border: 0;
    border-radius: 5px;
  }
  hr {
    width: 100%;
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
  }
  a {
    font-size: 15;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;
