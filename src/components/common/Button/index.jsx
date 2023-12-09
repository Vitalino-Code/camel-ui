import { Container } from './styles'

const Button = ({ text, ...rest }) => {
  return <Container {...rest}>{text}</Container>
}

export default Button
