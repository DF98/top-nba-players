import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import teamData from './team-data.json'
import ImgView from './ImgView'



function PlayerCard({ player, img }) {
    // These states are to change the text gradient based on the team colours of a player
    const [gradL, setGradL] = useState("from-green-800")
    const [gradR, setGradR] = useState("to-red-900")
    const [lineAccent, setLineAccent] = useState("emerald-500")

    useEffect(() => {
        console.log(teamData.data)
        teamData.data.forEach(t => {
            if (player.team.abbreviation === t.abbreviation) {
                setGradL(t.colourLeft)
                setGradR(t.colourRight)
                setLineAccent(t.accent)
            }
        });
    }, [player])

    return (
        <div className="w-full m-8 bg-white shadow-lg rounded-md">
            <div className="">
                <ImgView img={img} size="60" resolution="high"/>
                <hr className={`mb-4 mx-8 ${"border-"+lineAccent}`} />
                <p className={`text-transparent lg:text-5xl text-4xl font-heebo bg-clip-text bg-gradient-to-r from-black to-blue-600 text-center`}>{player.first_name.toUpperCase()}</p>
                <p className={`text-transparent lg:text-5xl text-4xl font-heebo bg-clip-text bg-gradient-to-r ${"from-" + gradR} ${"to-" + gradL} text-center`}>{player.last_name.toUpperCase()}</p>
            </div>
            <div className="grid grid-cols-2 text-center my-8 mx-4">
                <p className="text-lg font-light">TEAM</p>
                <p className="text-lg font-light">{player.team.full_name.toUpperCase()}</p>
                <p className="text-lg font-light">POSITION</p>
                <p className="text-lg font-light">{player.position}</p>
                <p className="text-lg font-light">HEIGHT</p>
                <p className="text-lg font-light">{player.height_feet}'{player.height_inches}</p>
                <p className="text-lg font-light">WEIGHT</p>
                <p className="text-lg font-light">{player.weight_pounds} LBS</p>
                <p></p>
            </div>
        </div>
    )
}

PlayerCard.propTypes = {
    player: PropTypes.object,
    img: PropTypes.number
}

export default PlayerCard