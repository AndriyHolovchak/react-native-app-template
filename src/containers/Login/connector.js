import { connect } from 'react-redux'
import { login_a } from '../../models/_actions.register'

const mapActionToProps = {
  loginRequest: login_a.loginRequest,
}

const mapStateToProps = (state) => ({
  showSpinner: state.viewport.spinner
})


export default connect(mapStateToProps, mapActionToProps)
