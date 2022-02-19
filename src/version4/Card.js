import react from "react";
import { useState } from "react";
import "./v4.css";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  gap: 5%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--card);
  width: 280px;
  height: 55px;
  border-radius: 10px;
  color: white;
  text-decoration: none;

  .icon {
    width: 30px;
  }

  .name {
    font-size: 20px;
  }

  .explain {
    display: flex;
    flex-direction: column;
    font-size: 15px;
  }
`;

const Card = ({ contents }) => {
  const { link, icon, name, detail } = contents;
  return (
    <a href={link} style={{ textDecorationLine: "none" }}>
      <Wrapper>
        <img className="icon" src={icon}></img>
        <div className="name">{name}</div>
        <div className="explain">{detail}</div>
      </Wrapper>
    </a>
  );
};

export default Card;
