import React, {Component} from 'react';
import ListContacts from './ListContacts'

const contacts = [
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

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    )
  }
}

export default App;