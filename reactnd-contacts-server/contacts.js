const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'mariya',
      name: 'Mariya Eggensperger',
      email: 'mariya@reactpractice.com',
      avatarURL: config.origin + '/mariya.jpg'
    },
    {
      id: 'scott',
      name: 'Scott Eggensperger',
      email: 'scott@reactpractice.com',
      avatarURL: config.origin + '/scott.jpg'
    },
    {
      id: 'sofia',
      name: 'Sofia Eggensperger',
      email: 'sofia@reactpractice.com',
      avatarURL: config.origin + '/sofia.jpg'
    },
    {
      id: 'irina',
      name: 'Irina Wilson',
      email: 'irina@reactpractice.com',
      avatarURL: config.origin + '/irina.jpg'
    },
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
