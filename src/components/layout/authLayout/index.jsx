import { Children } from 'react'

import { Layout } from './styles'

function AuthLayout({ children }) {
  const Elements = Children.toArray(children)
  return (
    <Layout>
      <div>
        {Elements[0]}
        <hr />
        {Elements[1]}
      </div>
    </Layout>
  )
}

export default AuthLayout
