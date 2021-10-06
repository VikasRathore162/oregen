import React from 'react'
import styled from 'styled-components';
import banner from "../images/pana.png";
import Card from "./Card";
import Battle from "./Battle";
import Discord from "./Discord";
import Featured from './Featured';
import Footer from './footer';
function Home() {
    return (
        <>
            <div className="Container">
                <div className="LeftContainer">
                    <>
                        <>
                            <h2>Master any Skill </h2>
                            <h2 style={{ fontWeight: 700 }}>10x faster & 10x effectively</h2>
                        </>
                        <>
                            <h4>Learn while working on Real World Projects with </h4>
                            <h4 style={{ color: "#FF2E00" }}> GAMIFIED Learning Experience...</h4>
                        </>
                        <div className="Button">
                            Explore
                        </div>
                    </>
                </div>
                <div className="RightContainer">
                    <img className="responsive" src={banner} />
                </div>
            </div>
            <div className="Courses">
                <div className="Heading1">
                    <h2 >Our Courses</h2>
                    <div className="Line"></div>
                </div>
                <h3 >Most <span style={{ color: "#FF2E00" }}>practial courses</span> by Top Industry experts</h3>

                <div className="CardContainer">
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
            <div className="Battlegr">
                <div className="Heading1">
                    <h2 >BATTLEGROUND</h2>
                    <div className="Line"></div>
                </div>
                <h3 >Compete With the People Having Same <span style={{ color: "#FF2E00" }}>Skill </span> & <span style={{ color: "#FF2E00" }}>Interest </span></h3>

                <div className="BattleContainer">
                    <Battle />
                </div>
            </div>
            <div className="Discord">
                <div className="Heading">
                    <>
                        <h3>Join our Discord community and hangout with top industry experts</h3>
                    </>
                </div>
                <div className="DiscordContainer">
                    <Discord />
                </div>
            </div>
            <div className="Featured">
                <div className="Heading1">
                    <h2>WE ARE FEATURED IN : </h2>
                    <div className="Line"></div>
                </div>
                <div className="featured">
                    <Featured />
                </div>
            </div>
            <div className="Footer">
                <div className="footerContainer">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Home

// const Container=styled.div`
//     display:flex;
//     background:#000000;
//     width:100%;
//     justify-content:space-around;
// `
// const LeftContainer=styled.div`
//     display:flex;
//     flex-direction:column;
//     justify-content:space-evenly;
//     flex:0.6;
//     color:white;
//     font-weight:300;
//     font-size:48px;
//     span{
//         color:white;
//         font-weight:700;
//         font-size:48px;
//     }
// `
// const RightContainer=styled.div`
//     flex:0.4;
// `