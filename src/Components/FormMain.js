import React, { Component } from 'react'
import { Button, Checkbox, Form , Header, Segment, Image, Step, Icon, List} from 'semantic-ui-react'
import ChoicesPackage from './ChoicesPackage'
import img from '../Resources/map.png'

class FormMain extends Component {	  
	render(){
		return(
		<Form>
			<ChoicesPackage/>
			<Segment>
				<Header as='h3'>2. ¿Donde recogemos tu envío?</Header>
				<Form.Group unstackable widths={2}>
					<Form.Input label='Contacto' placeholder='Nombre de quien envía' />
					<Form.Input label='Telefono' placeholder='Numero' />
				</Form.Group>
				<Form.Input label='¿Recoger en donde?' placeholder='Calle / Colonia / Ciudad' />
			</Segment>
			<Segment>
				<Header as='h3'>3. ¿Donde dejamos tu cosas?</Header>
				<Form.Group unstackable widths={2}>
					<Form.Input label='Contacto' placeholder='Nombre de quien recibe' />
					<Form.Input label='Telefono' placeholder='Numero' />
				</Form.Group>
				<Form.Input label='¿Donde entregamos?' placeholder='Calle / Colonia / Ciudad' />
			</Segment>
			<Segment>
				<Header as='h3'>4. Plan de envío</Header>
				<Form.Group>
				<Step.Group vertical size='tiny'>
					<Step>
					<Icon name='truck' />
					<Step.Content>
						<Step.Title>Paquete</Step.Title>
						<Step.Description>Sobre</Step.Description>
					</Step.Content>
					</Step>

					<Step>
					<Icon name='payment' />
					<Step.Content>
						<Step.Title>Recolección</Step.Title>
						<Step.Description>Juan Perez: 8181818110
							Edificio Santa Lucia 1</Step.Description>
					</Step.Content>
					</Step>

					<Step>
					<Icon name='payment' />
					<Step.Content>
						<Step.Title>Entrega</Step.Title>
						<Step.Description>Jose Lopez: 8273828282
							Av. Pase de los Leones 3</Step.Description>
					</Step.Content>
					</Step>

					<Step>
					<Icon name='payment' />
					<Step.Content>
						<Step.Title>Estimaciones</Step.Title>
						<Step.Description>
							<List>
								<List.Item as='a'>
								<Icon name='fire' />
								<List.Content>
									<List.Header>Tiempo de espera</List.Header>
									<List.Description>
									Entregara en 25 minutos despúes de su recolección.
									</List.Description>
								</List.Content>
								</List.Item>
								<List.Item as='a'>
								<Icon name='truck' />
								<List.Content>
									<List.Header>Distancia recorrida</List.Header>
									<List.Description>
									15 kms de recorrido
									</List.Description>
								</List.Content>
								</List.Item>
								<List.Item as='a'>
								<Icon name='money bill alternate' />
								<List.Content>
									<List.Header>Costo</List.Header>
									<List.Description>
									Costo: $60
									</List.Description>
								</List.Content>
								</List.Item>
							</List>
						</Step.Description>
					</Step.Content>
					</Step>
				
					<Step active>
					<Icon name='info' />
					<Step.Content>
						<Step.Title>Confirmar orden</Step.Title>
					</Step.Content>
					</Step>
  				</Step.Group>
					<Image src={img} size='medium' floated='right' rounded />
				</Form.Group>
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