import React from 'react'
import styled from 'styled-components';
import jagran from "../images/jagran.png";
import amarujala from "../images/amarujala.png";
import indiatv from "../images/indiatv.png";
import dailyhunt from "../images/dailyhunt.png";
import hindustan from "../images/hindustan.png";
import pioneer from "../images/pioneer.png";
function Featured() {
  return (  
    <>
      <div className="featured">
        <div class="rowss">
          <div class="column">
            <div class="card">
              <img className="jagran" src={jagran} />
            </div>
          </div>

          <div class="column">
            <div class="card">
            <img className="amarujala" src={amarujala} />
            </div>
          </div>

          <div class="column">
            <div class="card">
            <img className="indiatv" src={indiatv} />
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img className="dailyhunt" src={dailyhunt} />
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img className="hindustan" src={hindustan} />
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
export default Featured
