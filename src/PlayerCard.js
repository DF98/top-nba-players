import React from 'react'
import PropTypes from 'prop-types'

function PlayerCard({ player = { first_name: "default", last_name: "name" }, img = "" }) {

    return (
        <div className="m-8 bg-gradient-to-r from-emerald-900 to-emerald-300 shadow-lg rounded-md">
            <div className="grid grid-cols-2">
                <div>
                    <div
                        className='bg-local bg-no-repeat bg-center h-48 w-48 rounded-full'
                        style={{
                            backgroundImage: `url("https://cdn.nba.com/headshots/nba/latest/260x190/${img}.png")`
                        }}>
                    </div>
                    <p className="text-3xl font-heebo">{player.first_name} {player.last_name} </p>
                </div>
                <div>
                    <p>Team {player.team.full_name}</p>
                    <p>Position {player.position}</p>
                    <p>Height {player.height_feet}'{player.height_inches}</p>
                    <p>Weight {player.weight_pounds} lbs</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

PlayerCard.propTypes = {
    player: PropTypes.object,
    img: PropTypes.string
}

export default PlayerCard