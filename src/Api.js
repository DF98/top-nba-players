/* 
This function accepts 2 props 

1. endpoint: this is the endpoint you want to use for example player,teams and games are
types of endpoints that are available for this API

2. id: for when you want a specific entry, say you want a specific player, then you will
need to specify their id. If you omit id prop, then it will fetch all results from the endpoint.

*/
import React, { useState, useEffect } from 'react';

function determineReturn(nbaData, endpoint, id) {
	let outputHtml = <p>Error: No Output</p>
	if (!id == undefined) {
		switch (endpoint) {
			case 'players':
				// console.log("players endpoint fetched")
				outputHtml = (
					<div>
						<ul>{
							nbaData.map(d => (<li key={d.id}>{d.first_name}</li>))
						}
						</ul>
					</div>
				)
				break;

			case 'teams':
				outputHtml = <p>Teams endpoint selected</p>
				break;

			default:
				outputHtml = <p>ERROR: could not determine endpoint</p>

		}
	}
	else {
		switch (endpoint) {
			case 'players':
				outputHtml = <li key={id}>{`${nbaData.first_name} ${nbaData.last_name}`}</li>
				break;

			default:
				break;
		}
	}
	// console.log(outputHtml)
	return outputHtml
}

export default function Api(props) {
	let fetchUrl = ""
	const [nbaData, setNbaData] = useState([])

	if (!props.id) {
		fetchUrl = `https://free-nba.p.rapidapi.com/${props.endpoint}?page=0`
	}
	else {
		fetchUrl = `https://free-nba.p.rapidapi.com/${props.endpoint}/${props.id}`
	}

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ccdcf26f0amsh0a05285afe6fe1ap1bc969jsn2f978ec224f0',
			'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
		}
	};

	useEffect(() => {
		fetch(fetchUrl, options)
			.then(response => response.json())
			.then((response) => {
				setNbaData(response.data)
				// console.log(`data = ${JSON.stringify(response.data)}`)
				// console.log(`nbaData = ${JSON.stringify(nbaData)}`)
			})
			.catch(err => console.error(err));
	}, [])

	return determineReturn(nbaData, props.endpoint, props.id)
}
