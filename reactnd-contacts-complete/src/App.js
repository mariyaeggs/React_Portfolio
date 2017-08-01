import React, { Component } from 'react';
import ListContacts from './ListContacts'

class App extends Component {
  state = {
   contacts: [
  {
    "id": "mariya",
    "name": "Mariya Eggensperger",
    "email": "mariya@reactpractice.com",
    "avatarURL": "http://localhost:5001/mariya.jpg"
  },
  {
    "id": "scott",
    "name": "Scott Eggensperger",
    "email": "scott@reactpractice.com",
    "avatarURL": "http://localhost:5001/scott.jpg"
  },
  {
    "id": "sofia",
    "name": "Sofia Eggensperger",
    "email": "sofia@reactpractice.com",
    "avatarURL": "http://localhost:5001/sofia.jpg"
  }, 
  {
    "id": "irina",
    "name": "Irina Wilson",
    "email": "irina@reactpractice.com",
    "avatarURL": "http://localhost:5001/irina.jpg"
  }
  ]
}
removeContacts = (contact) => {
  this.setState ((state) => ({
    contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
}
  render() {
    return (
      <div>
        <ListContacts onDeleteContact = {this.removeContacts}contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;