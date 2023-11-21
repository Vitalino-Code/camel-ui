import { Children } from 'react'

import { Layout } from './styles'

function AuthLayout({ children, reverse }) {
  const Elements = Children.toArray(children)
  return (
    <Layout reverse={reverse || false}>
      <div>
        {Elements[0]}
        <hr />
        {Elements[1]}
      </div>
    </Layout>
  )
}

export default AuthLayout
