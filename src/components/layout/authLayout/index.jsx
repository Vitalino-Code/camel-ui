import React, { Children } from 'react'

import { Layout } from './styles'

function AuthLayout(props) {
  const Elements = Children.toArray(props.children)
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
