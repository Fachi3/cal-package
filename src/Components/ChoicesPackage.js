import React, { Component } from 'react'
import { Form, Header, Segment} from 'semantic-ui-react'

class ChoicesPackage extends Component {
	state = {}
	handleChange = (e, { value }) => this.setState({ value })
	  
	render(){
		const { value } = this.state
		return(
            <Segment className="entry">
                <Header as='h3' className="title">1. Elige el tamaño de tu paquete</Header>
                <Form.Group inline className="body">
                    <Form.Radio
                    label='Sobre'
                    value='s'
                    checked={value === 's'}
                    onChange={this.handleChange}
                    />
                    <Form.Radio
                    label='Caja mediana'
                    value='cm'
                    checked={value === 'cm'}
                    onChange={this.handleChange}
                    />
                    <Form.Radio
                    label='Caja grande'
                    value='cg'
                    checked={value === 'cg'}
                    onChange={this.handleChange}
                    />
                </Form.Group>
            </Segment>
		)
	}
}

export default ChoicesPackage