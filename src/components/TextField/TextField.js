import "./TextField.css";

export const TextField = (props) => {

	const modifiedPlaceholder = `${props.placeholder}...`

	const onType = (event) => {
		props.onEdit(event.target.value)
	}

	return(
		<div className="field-text">
			<label>{props.label}</label>
			<input value={props.valor} onChange={onType} required={props.needed} placeholder={modifiedPlaceholder} />
		</div>
	)
}

export default TextField;