//rafc
import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle }) => {

  return (
    <>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string
}