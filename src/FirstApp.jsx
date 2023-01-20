import PropTypes from 'prop-types'

const nametUser = 'Andres';
const obj = {
  msg  : 'Hola',
  msg2 : 'Mundo'
}
const myName = (name = nametUser) =>{
  return `Name is ${name}`
}

export const FirstApp = ({title, number, subtitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <h2 data-testid="test-subtitle">{subtitle}</h2>
      <h3>{ nametUser } : {number}</h3>
      <h3>{ myName() }</h3>
      <h3>{ myName('Paco') }</h3>
      <code>{ JSON.stringify(obj) }</code>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  number : PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  subtitle : 'Sin Subtitulo'
}