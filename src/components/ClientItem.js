import React from 'react'

const ClientItem = ({ showModalClientCard, setShowModalClientCard, client }) => {

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
      setShowModalClientCard(false)
    }
  })
  return (
    <div className={showModalClientCard ? "modal-wrapper" : "modal-wrapper hidden"}>
      <div className="container">

        <div className="header">
          <div className="modal-title my-2">Client Card</div>
          <span onClick={() => setShowModalClientCard(false)} className="modal-close-btn">&times;</span>
        </div>

        <ul className="list-group">
          <li className="list-group-item">First Name:{' '}
            {client !== null && client.firstName && client.firstName} </li>
          <li className="list-group-item">Last Name:{' '}
            {client !== null && client.lastName && client.lastName} </li>
          <li className="list-group-item">Email:{' '}
            {client !== null && client.email && client.email}</li>
          <li className="list-group-item">Phone:{' '}
            {client !== null && client.phone && client.phone}</li>
          <li className="list-group-item">City:{' '}
            {client !== null && client.address && client.address.city}</li>
          <li className="list-group-item">State:{' '}
            {client !== null && client.address  && client.address.state}</li>
          <li className="list-group-item">Street Address:{' '}
            {client !== null && client.address && client.address.streetAddress}</li>
          <li className="list-group-item">Zip:{' '}
            {client !== null && client.address && client.address.zip}</li>
        </ul>

        <button className="btn btn-danger float-right mt-2" onClick={() => setShowModalClientCard(false)}>Close</button>
      </div>
    </div>
  )
};

export default ClientItem


