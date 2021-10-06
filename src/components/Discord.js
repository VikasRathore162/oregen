import React from 'react'
import styled from 'styled-components';
import Card from "./Card";
import Battle from "./Battle";
import dislogo from "../images/discord.png";
function Discord() {
  return (
    <>
      <div className="DiscordContainer">
        <>
          <div className="dislogo">
            <img className="DiscordLogo" src={dislogo} />
          </div>
        </>
      </div>

    </>
  )
}
export default Discord
