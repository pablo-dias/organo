import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {

	const teams = [
		{
			name: 'Rage',
			primaryColor: '#57C278',
			secondaryColor: '#D9F7E9'
		},
		{
			name: 'Toxic',
			primaryColor: '#82CFFA',
			secondaryColor: '#E8F8FF'
		},
		{
			name: 'FullMute',
			primaryColor: '#E06B69',
			secondaryColor: '#FDE7E8'
		},
		{
			name: 'Split',
			primaryColor: '#FFBA05',
			secondaryColor: '#FFF5D9'
		},
	]

	const [players, setPlayers] = useState([])

	const onNewPlayer = (player) => {
		debugger
		setPlayers([...players, player])
	}

	return (
		<div className="App">
			<Banner />
			<Form teams={teams.map(team => team.name)} onPlayerRegister={player => onNewPlayer(player)} />
			{teams.map(team =>
				<Team
					key={team.name}
					name={team.name}
					primaryColor={team.primaryColor}
					secondaryColor={team.secondaryColor}
					players={players.filter(player => player.team === team.name)}
				/>
			)}
		</div>
	);
}

export default App;
