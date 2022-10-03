import React, { useState, useEffect } from 'react';

export function Api() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ccdcf26f0amsh0a05285afe6fe1ap1bc969jsn2f978ec224f0',
			'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
		}
	};
	
	fetch('https://free-nba.p.rapidapi.com/teams/1', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
}

