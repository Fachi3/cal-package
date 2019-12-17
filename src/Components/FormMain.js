import React, { Component } from 'react'
import { Button, Checkbox, Form , Header, Segment, Image, Step, Icon, List, Container} from 'semantic-ui-react'
import ChoicesPackage from './ChoicesPackage'
import img from '../Resources/map.png'

class FormMain extends Component {	  
	render(){
		return(
		<Form className="timeline">
			<ChoicesPackage/>
			<Segment className="entry">
				<Header as='h3' className="title">2. ¿Donde recogemos tu envío?</Header>
				<Form.Group unstackable widths={3} className="body">
					<Form.Input label='Contacto' placeholder='Nombre de quien envía' />
					<Form.Input label='Telefono' placeholder='Numero' />
					<Form.Input label='¿Recoger en donde?' placeholder='Calle / Colonia / Ciudad' />
				</Form.Group>
			</Segment>
			<Segment className="entry">
				<Header as='h3' className="title">3. ¿Donde dejamos tu cosas?</Header>
				<Form.Group unstackable widths={3}>
					<Form.Input label='Contacto' placeholder='Nombre de quien recibe' />
					<Form.Input label='Telefono' placeholder='Numero' />
					<Form.Input label='¿Donde entregamos?' placeholder='Calle / Colonia / Ciudad' />
				</Form.Group>
			</Segment>
			<Segment className="entry">
				<Header as='h3' className="title">4. Plan de envío</Header>
					<Image src={img} size='medium' floated='right' rounded />
			</Segment>
			<Form.Field>
				<Checkbox label='I agree to the Terms and Conditions' />
			</Form.Field>
			<Button type='submit'>Submit</Button>
		</Form>
		)
	}
}

export default FormMain