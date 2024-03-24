import { useState } from 'react'
import './scss/Table.scss'

export default function Table({ tablesData, removeTableEntry }) {  
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr><th>Table Name</th><th>Count</th><th></th></tr>
        </thead>
        <tbody>
          {
            tablesData.map((entry, key) =>
              <tr key={key}>
                <td>{entry.tableName}</td>
                <td>{entry.count}</td>
                <td><button className="btn btn-danger btn-sm" onClick={ () => removeTableEntry(tablesData) }>x</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
