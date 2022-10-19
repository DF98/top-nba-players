import { useState, useEffect } from 'react'
import './App.css';
import Api from './Api.js';
// import PlayersTable from './PlayersTable';
import React from 'react';
import playerData from './Playerdata.json'

function App() {
  const [ps, setPS] = useState([])
  const playerIDs = playerData.players
  const [player1ID, setP1ID] = useState(0)

  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState(playerIDs[1])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ccdcf26f0amsh0a05285afe6fe1ap1bc969jsn2f978ec224f0',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  }

  // useEffect(() => {
  //   setPS(playerIDs.map( p => {
  //     fetch(`https://free-nba.p.rapidapi.com/players/${p.id}`,options)
  //     .then(r => r.json())
  //     .then(d => p = d )
  //     .catch(err => console.log(err))

  //   }
  //   ))
  // },[])

  useEffect(() => {

      fetch(`https://free-nba.p.rapidapi.com/players/${player1ID}`, options)
        .then(response => response.json())
        .then((data) => {
          setPlayer1(data)
          console.log(data)
        })
        .catch(err => console.error(err));
  
  }, [player1ID])

  // const playerIDs = playerData.players
  // let players = []
  // const [nbaData, setNbaData] = useState([])



  // const fetchPlayers = (players) => {
  //   for (const player of players) {
  //     fetch(`https://free-nba.p.rapidapi.com/players/${player.id}`, options)
  //       .then(response => response.json())
  //       .then(data => players.push(data))
  //       .catch(err => console.error(err));
  //   }
  // }

  // useEffect(fetchPlayers(playerIDs), [])

  return (
    <div>
      <h1>NBA Players</h1>
      <h2>You have selected:</h2>
      <p>{player1.first_name} {player1.last_name}</p>
        {playerIDs.map((player) => {
          return <button key={player.id} onClick={((e) => {setP1ID(player.id)})}>{player.name}</button>
          console.log(player)
        })}
    </div>
  );
}

export default App;
