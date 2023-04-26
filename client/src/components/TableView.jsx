import React from 'react'
import './TableView.css'

const TableView = ({users}) => {
  return (
    <div>
        <table className="user-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Income</th>
      <th>City</th>
      <th>Car</th>
      <th>Quote</th>
      <th>Phone Price</th>
    </tr>
  </thead>
  <tbody>
    {users && users.map(user => (
      <tr key={user._id}>
        <td>{user.id}</td>
        <td>{`${user.first_name} ${user.last_name}`}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.income}</td>
        <td>{user.city}</td>
        <td>{user.car}</td>
        <td>{user.quote}</td>
        <td>{user.phone_price}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default TableView