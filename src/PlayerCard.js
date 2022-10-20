import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

function PlayerCard({ player, img }) {
    // These states are to change the text gradient based on the team colours of a player
    const [gradL,setGradL] = useState("black")
    const [gradR,setGradR] = useState("black")
    const [lineAccent, setLineAccent] = useState("black")

        return (    
                <div className="w-full m-8 bg-white shadow-lg rounded-md">
                    <div className="">
                        <div
                            className='bg-local bg-no-repeat bg-center h-48 w-48 rounded-full mx-auto my-8'
                            style={{
                                backgroundImage: `url("https://cdn.nba.com/headshots/nba/latest/260x190/${img}.png")`
                            }}>
                        </div>
                        <hr className="mb-4 mx-8 border-emerald-500"/>
                        <p className="antialiased text-transparent lg:text-5xl text-4xl font-heebo bg-clip-text bg-gradient-to-r from-emerald-900 to-white text-center">{player.first_name.toUpperCase()}</p>
                        <p className="antialiased text-transparent lg:text-5xl text-4xl font-heebo bg-clip-text bg-gradient-to-r from-emerald-900 to-white text-center">{player.last_name.toUpperCase()}</p>

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