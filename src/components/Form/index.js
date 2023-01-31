import { useState } from "react"
import Button from "../Button"
import Dropdown from "../Dropdown"
import TextField from "../TextField"
import "./Form.css"

const Form = (props) => {

	const [name, setName] = useState('')
	const [role, setRole] = useState('')
	const [image, setImage] = useState('')
	const [team, setTeam] = useState('')

	const onSave = (event) => {
		event.preventDefault()
		props.onPlayerRegister({name, role, image, team})
		setName('')
		setRole('')
		setImage('')
		setTeam('')
	}

	return (
		<section className="form">
			<form onSubmit={onSave}>
				<h2>Preencha os dados para criar a party do Dota</h2>
				<TextField
					needed={true}
					label="Nome"
					placeholder="Digite o seu nome"
					valor={name}
					onEdit={valor => setName(valor)}
				/>
				<TextField
					needed={true}
					label="Role"
					placeholder="Digite sua role"
					valor={role}
					onEdit={valor => setRole(valor)}
				/>
				<TextField
					needed={true}
					label="Imagem"
					placeholder="Insira o endereço da imagem"
					valor={image}
					onEdit={valor => setImage(valor)}
				/>
				<Dropdown
					label="Team"
					itens={props.teams}
					required={true}
					valor={team}
					onEdit={valor => setTeam(valor)}
				/>
				<Button>
					Criar Card
				</Button>
			</form>
		</section>
	)
}

export default Form