import React from 'react'
import styled from 'styled-components';
import battle from "../images/battle.png";
import vector from "../images/Vector.png";
import Card from "./Card";
function Battle() {
  return (
    <>
      <div className="BattleContainer">
        <div className="LeftContainer">
          <img className="responsive" src={battle} />
        </div>
        <div className="RightContainer">
          <>
            <>
              <h3> <img className="vector" src={vector} />&emsp;1 Vs 1 Skill Battle</h3>
              <h3> <img className="vector" src={vector} />&emsp;Brainstorming Competition</h3>
              <h3> <img className="vector" src={vector} />&emsp;Check Where you Stand</h3>
              <h3> <img className="vector" src={vector} />&emsp;Strengthen Your Concept</h3>
              <h3> <img className="vector" src={vector} />&emsp;Train Yourself</h3>
            </>
            <div className="Button">
              EXPLORE BATTLEGROUND
            </div>
          </>
        </div>

      </div>
    </>
  )
}

export default Battle
