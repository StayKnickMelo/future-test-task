import React from 'react';

const Table = ({ clients, sortBy, sortDirections, setShowModalClientCard, setClient }) => {

  const sortingArrow = () => {
    if (sortDirections === 'asc') {
      return <i style={arrowStyle} className="fas fa-arrow-down"></i>
    } else if (sortDirections === 'desc') {
      return <i style={arrowStyle} className="fas fa-arrow-up"></i>
    } else {
      return null
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ paddingRight: 0 }} scope="col">#
          {sortingArrow()}
          </th>
          <th scope="col">
            <button onClick={() => sortBy('firstName')} type="button" className=" btn btn-secondary">First Name</button>
          </th>
          <th scope="col">
            <button onClick={() => sortBy('lastName')} type="button" className="btn btn-secondary">Last Name</button>
          </th>
          <th scope="col">
            <button onClick={() => sortBy('email')} type="button" className="btn btn-secondary">Email</button>
          </th>
          <th scope="col">
            <button onClick={() => sortBy('phone')} type="button" className="btn btn-secondary">Phone</button>
          </th>
        </tr>

      </thead>
      <tbody>
        {clients.length > 0 && clients.map((profile, index) => (
          <tr
            key={profile.email}
            onClick={() => {
              setShowModalClientCard(true);
              setClient(profile)
            }}
            style={{ cursor: 'pointer' }}
          >
            <th scope="row">{index + 1}</th>
            <td>{profile.firstName}</td>
            <td>{profile.lastName}</td>
            <td>{profile.email}</td>
            <td>{profile.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const arrowStyle = {
  marginLeft: '10px',
}

export default Table
