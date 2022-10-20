import { useState, useEffect } from 'react'
import './App.css';
import Api from './Api.js';
// import PlayersTable from './PlayersTable';
import React from 'react';
import playerData from './Playerdata.json'
import PlayerCard from './PlayerCard';

function App() {
  const [ps, setPS] = useState([])
  const playerIDs = playerData.players
  const [player1ID, setP1ID] = useState(0)

  const [player1, setPlayer1] = useState({})
  const [playerImg, setPlayerImg] =useState(0)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ccdcf26f0amsh0a05285afe6fe1ap1bc969jsn2f978ec224f0',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  }

  useEffect(() => {

    fetch(`https://free-nba.p.rapidapi.com/players/${player1ID}`, options)
      .then(response => response.json())
      .then((data) => {
        setPlayer1(data)
        console.log(data)
      })
      .catch(err => console.error(err));

  }, [player1ID])

  return (
    <div>
      <div className="bg-slate-200 grid grid-rows-2">
        <PlayerCard player={player1} img={playerImg}/>
        <div className="grid gap-4 grid-cols-10">
          {playerIDs.map((player) => {
            return <button className="rounded-full bg-slate-500" key={player.id} onClick={((e) => {
               setP1ID(player.id);
               setPlayerImg(player.imgID) 
              })}>{player.name}
              </button>
          })}
        </div>
      </div>
    </div>



  )
}

export default App;
