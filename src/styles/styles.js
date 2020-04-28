import styled from "styled-components";
import { Form, Input, Textarea } from "@rocketseat/unform";

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const Main = styled.main`
  padding: 0px;

  section {
    padding: 20px;

    p {
      color: #ccc;
      font-size: 16px;
      line-height: 30px;
      text-align: left;
      margin-top: 20px;

      span {
        background-color: #f5f6ce;
        padding: 0px;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #ccc;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Colbg = styled.div`
  width: 50%;
  min-width: 360px;
  padding: 20px;
`;

export const Col = styled.div`
  width: 50%;
  min-width: 360px;
  padding: 20px;

  p {
    color: #ccc;
  }
`;

export const Line = styled.hr`
  margin: 50px 0;
  opacity: 0.1;
`;

export const MyForm = styled(Form)`
  width: 100%;
  padding: 20px;
`;

export const MyInput = styled(Input)`
  padding: 0 10px;
  border-radius: 2px;
  height: 40px;
  margin: 10px 0;
  width: 100%;
  border: solid 1px #ccc;
`;

export const MyTextarea = styled(Textarea)`
  padding: 10px;
  border-radius: 2px;
  margin: 10px 0;
  width: 100%;
  border: solid 1px #ccc;

  ::placeholder {
    font: 14px "Roboto", sans-serif;
  }
`;

export const MyButton = styled.button`
  padding: 10px;
  border: solid 1px #ccc;
  border-radius: 2px;
  float: right;
`;

export const Item = styled.div`
  background-color: #ccc;
  height: 100px;
  width: 100%;
  padding: 20px;
  color: #000;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  li {
    list-style: none;
    margin: 10px;
  }
`;
