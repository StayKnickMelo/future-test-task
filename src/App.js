import React, { useState, useEffect, Fragment } from 'react';
import './App.css';

import Table from './components/Table';
import ClientItem from './components/ClientItem';
import ClientForm from './components/ClientForm';
import Loader from './components/Loader';

function App() {

  const [clients, setClients] = useState([]);
  const [sortDirections, setSortDirections] = useState('');
  const [client, setClient] = useState(null);
  const [showModalClientCard, setShowModalClientCard] = useState(false);
  const [showModalClientForm, setShowModalClientForm] = useState(false);
  const [newClient, setNewClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    fetchData()
  }, []);

  const sortBy = (field) => {

    if (field === 'phone') {
      setClients(
        [...clients.sort((a, b) => {
          if (sortDirections === 'asc') {
            setSortDirections('desc');
            return parseInt(a[field].replace(/[^0-9]/g, '') - parseInt(b[field].replace(/[^0-9]/g, '')))
          } else {
            setSortDirections('asc');
            return parseInt(b[field].replace(/[^0-9]/g, '') - parseInt(a[field].replace(/[^0-9]/g, '')))
          }
        })]
      );

    } else {
      setClients(
        [...clients.sort((a, b) => {

          if (sortDirections === 'desc') {
            setSortDirections('asc');
            return a[field].toLowerCase() > b[field].toLowerCase() ? -1 : 1
          } else {
            setSortDirections('desc');
            return a[field].toLowerCase() < b[field].toLowerCase() ? -1 : 1
          }
        })]
      )
    }
  }

  const addNewClient = (newClient) => {
    setClients([newClient, ...clients]);

  }

  const fetchData = async () => {
    await fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
      .then(res => res.json())
      .then(payload => setClients(payload))
      .catch(err => console.log(err));
  };

  return (
    <Fragment>
      {clients.length > 0 ? (
        <Fragment>
          <button onClick={() => setShowModalClientForm(true)} className="btn btn-primary m-2">Add new client</button>
          <Table
            clients={clients}
            sortBy={sortBy}
            sortDirections={sortDirections}
            setShowModalClientCard={setShowModalClientCard}
            setClient={setClient} />
          <ClientItem
            showModalClientCard={showModalClientCard}
            setShowModalClientCard={setShowModalClientCard}
            client={client}
          />
          <ClientForm
            setShowModalClientForm={setShowModalClientForm}
            showModalClientForm={showModalClientForm}
            newClient={newClient}
            setNewClient={setNewClient}
            addNewClient={addNewClient} />
        </Fragment>
      ) : <Loader />}

    </Fragment>
  );
}

export default App;
