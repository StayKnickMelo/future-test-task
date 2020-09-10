import React from 'react';

const ClientForm = ({

  setShowModalClientForm,
  showModalClientForm,
  newClient,
  setNewClient,
  addNewClient }
) => {

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-wrapper-form')) {
      setShowModalClientForm(false)
    }
  });

  const onChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addNewClient(newClient);
    setShowModalClientForm(false);
    setNewClient({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
  }

  return (
    <div className={showModalClientForm ? "modal-wrapper-form" : "modal-wrapper-form hidden"}>
      <div className="container">
        <div className="header">
          <div className="modal-title my-2">Add new client</div>
          <span onClick={() => setShowModalClientForm(false)} className="modal-close-btn">&times;</span>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input value={newClient.firstName} required type="text" name="firstName" className="form-control" onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input value={newClient.lastName} required type="text" name="lastName" className="form-control" onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input value={newClient.email} required type="email" name="email" className="form-control" onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input value={newClient.phone} required type="text" name="phone" className="form-control" onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ClientForm
