import React from 'react'

function PlayerSelect({setPID,setPlayerImg,topPlayers}) {
  return (
    <div className="grid gap-4 grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 mx-auto">
          {topPlayers.map((player) => {
            return <button className="bg-contain bg-local bg-no-repeat bg-center h-24 w-24 rounded-full" 
            key={player.id} 
            onClick={() => {
                setPID(player.id);
                setPlayerImg(player.imgID) 
               }}
              style={
                {
                  backgroundImage: `url("https://cdn.nba.com/headshots/nba/latest/260x190/${player.imgID}.png")`,
              }
            }>
              </button>
          })}
        </div>
  )
}

export default PlayerSelect