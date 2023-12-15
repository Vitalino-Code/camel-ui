import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { api } from '../../services/api'

import Header from '../../components/common/header'
import Input from '../../components/forms/Input'

import { BiUser } from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { GiCancel } from 'react-icons/gi'
import { LuMail } from 'react-icons/lu'

import { EditForm, LockScreen, Options, Span, Table } from './styles'
import Button from '../../components/common/Button'

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [displayDelete, setDisplayDelete] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const [lockDisplay, setLockDisplay] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    refreshUsers()
  }, [])

  async function refreshUsers() {
    await api
      .get('/users')
      .then(resp => {
        setUsers(resp.data)
      })
      .catch(error => {
        //eslint-disable-next-line
        console.log(error)
      })
  }

  function getData() {
    if (users.length === 0) {
      return (
        <tr key={'loading'}>
          <td
            colSpan="3"
            style={{
              textAlign: 'center',
            }}
          >
            Carregando...
          </td>
        </tr>
      )
    } else {
      return users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <Options>
              <button
                onClick={() => {
                  setSelectedUser(user)
                  setDisplayEdit(true)
                  setLockDisplay(true)
                }}
              >
                <FaEdit size={16} />
              </button>
              <button
                onClick={() => {
                  setSelectedUser(user)
                  setDisplayDelete(true)
                  setLockDisplay(true)
                }}
              >
                <FaRegTrashCan size={16} />
              </button>
            </Options>
          </td>
        </tr>
      ))
    }
  }

  function deleteUser() {
    api
      .delete(`/users/${selectedUser.id}`)
      .then(() => {
        setSelectedUser({})
        setDisplayDelete(false)
        setLockDisplay(false)
        toast.success('Usuário Excluido com sucesso')
        refreshUsers()
      })
      .catch(toast.error('Falha na exclusão'))
  }

  const handleInputChange = event => {
    setSelectedUser({
      ...selectedUser,
      [event.target.name]: event.target.value,
    })
  }

  function handleEdit(e) {
    e.preventDefault()

    api
      .put(`/users/${selectedUser.id}`, {
        name: selectedUser.name,
        email: selectedUser.email,
        password: selectedUser.password,
        confirmedPassword: selectedUser.confirmedPassword,
      })
      .then(() => {
        setSelectedUser({})
        setDisplayEdit(false)
        setLockDisplay(false)
        toast.success('Usuário atualizado com sucesso')
      })

      .catch(() => {
        setSelectedUser({})
        setDisplayEdit(false)
        setLockDisplay(false)
        toast.error('Falha na Atualização')
      })
  }

  return (
    <>
      <Header />

      <Table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>{getData()}</tbody>
      </Table>

      <Span $show={displayDelete} $size>
        <p>Deseja realmente remover o usuário {selectedUser.name}?</p>
        <div>
          <button onClick={() => deleteUser()}>
            Excluir
            <FaRegTrashCan size={16} />
          </button>
          <button
            onClick={() => {
              setDisplayDelete(false)
              setLockDisplay(false)
            }}
          >
            Cancelar
            <GiCancel size={16} />
          </button>
        </div>
      </Span>
      <LockScreen
        $show={lockDisplay}
        onClick={() => {
          setSelectedUser({})
          setDisplayDelete(false)
          setDisplayEdit(false)
          setLockDisplay(false)
        }}
      />

      <Span $show={displayEdit}>
        <EditForm>
          <div
            onClick={() => {
              setSelectedUser({})
              setDisplayDelete(false)
              setDisplayEdit(false)
              setLockDisplay(false)
            }}
          >
            <IoClose size={20} />
          </div>

          <h3>Atualizar dados:</h3>
          <form onSubmit={handleEdit}>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome"
              autoComplete="off"
              required
              icon={BiUser}
              handleChange={handleInputChange}
              value={selectedUser.name}
            />

            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Seu e-mail"
              autoComplete="off"
              required
              icon={LuMail}
              handleChange={handleInputChange}
              value={selectedUser.email}
            />

            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              required
              handleChange={handleInputChange}
              value={selectedUser.password}
            />

            <Input
              type="password"
              name="confirmedPassword"
              id="confirmedPassword"
              placeholder="Confirme sua senha"
              required
              handleChange={handleInputChange}
              value={selectedUser.confirmedPassword}
            />

            <Button text="Atualizar" type="submit" />
          </form>
        </EditForm>
      </Span>
    </>
  )
}

export { UserManagement }
