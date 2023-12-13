import { useEffect, useState } from 'react'
import Header from '../../components/common/header'
import { api } from '../../services/api'

import { Table } from './styles'

const UserManagement = () => {
  const [users, setsUsers] = useState([])

  useEffect(() => {
    api
      .get('/users')
      .then(resp => {
        setsUsers(resp.data)
      })
      .catch(error => {
        //eslint-disable-next-line
        console.log(error)
      })
  }, [])

  function getData() {
    return users.map((user, i) => {
      ;<tr key={i}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    })
  }

  return (
    <>
      <Header />
      <p>{JSON.stringify(users)}</p>
      <Table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
          {getData()}
        </thead>
      </Table>
    </>
  )
}

export { UserManagement }
