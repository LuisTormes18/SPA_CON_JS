// https://api-contactos-node-mysql.herokuapp.com/
// url de mi api
// const URL = `http://localhost:3000/`;
const URL = `https://api-contactos-node-mysql.herokuapp.com/`;
const USER = `${URL}/user`;
const CONTACTS = `${URL}/contacts/`;

// endpoin user
const LOGIN_USER = `/${USER}/login`;
const REGISTER_USER = `/${USER}/register`;
const UPDATE_USER = `/${USER}/update`;
const DELETE_USER = `/${USER}/delete:id`;

// edpoin contacts
const GET_CONTACTS = `/${CONTACTS}/:userId`;
const ADD_CONTACT = `/${CONTACTS}/add`;
const UPDATE_CONTACT = `/${CONTACTS}/update`;
const DELETE_CONTACT = `/${CONTACTS}/delete/:id`;

export const api = {
  URL,
  LOGIN_USER,
  REGISTER_USER,
  UPDATE_CONTACT,
  UPDATE_USER,
  DELETE_CONTACT,
  DELETE_USER,
  GET_CONTACTS,
  ADD_CONTACT,
};
