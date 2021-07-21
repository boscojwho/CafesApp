import PouchDB from 'pouchdb-react-native';

const pouchDB = new PouchDB('cafes');
pouchDB.info().then(function (info) {
  console.log(info);
})