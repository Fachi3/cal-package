import React, { Component } from 'react'
import { Button, Checkbox, Form , Header} from 'semantic-ui-react'

class FormExample extends Component {
	state = {}
	handleChange = (e, { value }) => this.setState({ value })
	  
	render(){
		const { value } = this.state
		return(
		<Form>
			<Header as='h3'>Elige el tamaño de tu paquete</Header>
			<Form.Group inline>
				<Form.Radio
				label='Sobre'
				value='s'
				checked={value === 'sm'}
				onChange={this.handleChange}
				/>
				<Form.Radio
				label='Caja mediana'
				value='cm'
				checked={value === 'md'}
				onChange={this.handleChange}
				/>
				<Form.Radio
				label='Caja grande'
				value='cg'
				checked={value === 'lg'}
				onChange={this.handleChange}
				/>
			</Form.Group>
			<Header as='h3'>¿Donde recogemos tu envío?</Header>
			<Form.Group widths='equal'>
				<Form.Field>
				<label>First Name</label>
				<input placeholder='First Name' />
				</Form.Field>
			</Form.Group>
			<Form.Field>
				<Checkbox label='I agree to the Terms and Conditions' />
			</Form.Field>
			<Button type='submit'>Submit</Button>
		</Form>
		)
	}
}

export default FormExample