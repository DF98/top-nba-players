import { useState, useEffect } from 'react'
// import './App.css';
import Api from './Api.js';
// import PlayersTable from './PlayersTable';
import React from 'react';
import playerData from './Playerdata.json'
import PlayerCard from './PlayerCard';
import PlayerSelect from './PlayerSelect';

function App() {
  const playerIDs = playerData.players
  const [playerID, setPID] = useState(0)
  const [playerImg, setPlayerImg] = useState(0)
  const [player, setPlayer] = useState({
    first_name: "",
    last_name: "",
    team: { full_name: "" }
  })


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ccdcf26f0amsh0a05285afe6fe1ap1bc969jsn2f978ec224f0',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  }
  useEffect(() => {

    fetch(`https://free-nba.p.rapidapi.com/players/${playerID}`, options)
      .then(response => response.json())
      .then((data) => {
        setPlayer(data)
      })
      .catch(err => console.error(err));

  }, [playerID])

  const handleClick = (e) => {
    setPID(player.id);
    setPlayerImg(player.imgID)
  }

  return (
    <div className="bg-slate-200 h-screen">
      <h1 className="text-5xl text-center py-10">Top 100 NBA Players</h1>
      <div className="flex flex-col bg-slate-200 ">
        <PlayerCard player={player} img={playerImg} />
        <PlayerSelect setPID={setPID} setPlayerImg={setPlayerImg} topPlayers={playerIDs} />
      </div>
    </div>



  )
}

export default App;
