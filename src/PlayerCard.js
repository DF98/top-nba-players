import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import teamData from './team-data.json'
import ImgView from './ImgView'
import NameLetters from './NameLetters'



function PlayerCard({ player, img }) {
    // These states are to change the text gradient based on the team colours of a player
    const [gradL, setGradL] = useState("green-800")
    const [gradR, setGradR] = useState("red-900")
    const [lineAccent, setLineAccent] = useState("emerald-500")

    function initHtml() {
        if (player.id === undefined) {
            return (
                <div className="w-96 py-10 px-4 my-4 mx-auto bg-white shadow-lg rounded-md">
                    <p className=" text-center text-2xl text-bold">No Player Selected, Please Select a Player.</p>
                </div>
            )
        }
        else {
            return (<div className="w-96 px-4 my-4 mx-auto bg-white shadow-lg rounded-md">
                <div>
                    <ImgView img={img} size={60} isHighRes={true} />
                    <hr className={`mb-4 mx-8 ${"border-" + lineAccent}`} />
                    <NameLetters word={player.first_name} colourR={gradR} colourL={gradL} />
                    <NameLetters word={player.last_name} colourR={gradR} colourL={gradL} />
                </div>
                <div className="grid grid-cols-2 text-center my-8 mx-4">
                    <p className="text-lg font-bold">TEAM</p>
                    <p className="text-lg font-light">{player.team.full_name.toUpperCase()}</p>
                    <p className="text-lg font-bold">POSITION</p>
                    <p className="text-lg font-light">{player.position}</p>
                    <p className="text-lg font-bold">HEIGHT</p>
                    <p className="text-lg font-light">{player.height_feet != undefined ? `${player.height_feet}'${player.height_inches}`: "UNKNOWN"}</p>
                    <p className="text-lg font-bold">WEIGHT</p>
                    <p className="text-lg font-light">{player.weight_pounds != undefined ? `${player.weight_pounds} LBS` : "UNKNOWN" }</p>
                    <p></p>
                </div>
            </div>)
        }
    }

    useEffect(() => {
        console.log(teamData.data)
        teamData.data.forEach(t => {
            if (player.team.abbreviation === t.abbreviation) {
                setGradL(t.colourLeft)
                setGradR(t.colourRight)
                setLineAccent(t.accent)
                console.log(gradL)
                console.log(gradR)
            }
            // else{
            //     setGradL("black")
            //     setGradR("black")
            //     setLineAccent("black")
            // }
        });
    }, [player])

    return (
        initHtml()
    )
}

PlayerCard.propTypes = {
    player: PropTypes.object,
    img: PropTypes.number
}

export default PlayerCard