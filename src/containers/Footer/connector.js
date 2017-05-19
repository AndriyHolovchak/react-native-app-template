import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const mapActionToProps = {
  push: push,
}

const mapStateToProps = (state) => ({
  location: state.router.location.pathname
})


export default connect(mapStateToProps, mapActionToProps)
