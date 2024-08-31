import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Reportdatatable() {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th className='text-primary'>#</th>
            <th>Customers</th>
            <th>Country</th>
            <th>Price</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-primary'>#2473</td>
            <td>Brandon jacob</td>
            <td className='text-primary'>France</td>
            <td>$65</td>
            <td className='text-success'>Approved</td>

          </tr>
          <tr>
            <td className='text-primary'>#2147</td>
            <td>Bridle kesser</td>
            <td className='text-primary'>Italy</td>
            <td>$100</td>
            <td className='text-warning'>pending</td>

          </tr>
          <tr>
            <td className='text-primary'>#2049</td>
            <td>ashleigh</td>
            <td className='text-primary'>Germany</td>
            <td>$147</td>
            <td className='text-success'>approved</td>
          </tr>

          <tr>
            <td className='text-primary'>#2644</td>
            <td>angus grady</td>
            <td className='text-primary'>California</td>
            <td>$67</td>
            <td className='text-danger'>rejected</td>
          </tr>

          <tr>
            <td className='text-primary'>#2654</td>
            <td>raheem</td>
            <td className='text-primary'>Canada</td>
            <td>$97</td>
            <td className='text-success'>Approved</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
