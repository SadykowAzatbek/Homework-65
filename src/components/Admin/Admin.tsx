import React from 'react';

const Admin = () => {

  const formSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formSubmit} className="d-flex flex-column w-75 ms-auto me-auto gap-2">
        <select required>
          <option value=""></option>
          <option>Home</option>
          <option>About</option>
          <option>Contacts</option>
          <option>Courses</option>
        </select>
        <input name="title" id="title" required />
        <textarea name="content" id="content" required />
        <button type="submit" className="btn btn-warning">Save</button>
      </form>
    </div>
  );
};

export default Admin;