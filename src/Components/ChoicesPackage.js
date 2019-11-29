import React, { Component } from 'react'
import { Form , Header, Segment} from 'semantic-ui-react'

class ChoicesPackage extends Component {
	state = {}
	handleChange = (e, { value }) => this.setState({ value })
	  
	render(){
		const { value } = this.state
		return(
            <Segment>
                <Header as='h3'>1. Elige el tamaño de tu paquete</Header>
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
            </Segment>
		)
	}
}

export default ChoicesPackage