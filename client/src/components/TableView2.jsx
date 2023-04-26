import React from 'react'
import './TableView.css'

const TableView2 = ({users}) => {
  return (
    <div>
        <table className="user-table">
  <thead>
    <tr>
      <th>City</th>
      <th>Count</th>
      <th>Average Income</th>
    </tr>
  </thead>
  <tbody>
    {users && users.map(user => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.count}</td>
        <td>{user.avg_income}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default TableView2