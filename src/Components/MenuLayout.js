 
import React from 'react'
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
} from 'semantic-ui-react'
import FormMain from './FormMain'
import logo from '../logo.svg';

const MenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          ABoys
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      
      <Header as='h1'>Calculadora de envíos</Header>
      <p>Ingrese los datos correspondientes para calcular distancia, tiempo y costos por envíos</p>
      <Container textAlign="left">
        <FormMain/>
      </Container>
    </Container>
  </div>
)

export default MenuLayout