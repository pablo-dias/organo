import Player from "../Player"
import "./Team.css"

const Team = (props) => {
	return (
		props.players.length> 0 && <section className="team" style={{ backgroundColor: props.secondaryColor }}>
			<h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
			<div className="players">
				{props.players.map(player => <Player key={player.name} backgroundColor={props.primaryColor} name={player.name} role={player.role} image={player.image} />)}
			</div>
		</section>
	)
}

export default Team