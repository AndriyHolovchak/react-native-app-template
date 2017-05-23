import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-native'
import { ConnectedRouter as Router } from 'react-router-redux'
import routes from './routes'
import { Container } from 'native-base';
import AppFooter from './containers/Footer'
import AppHeader from './containers/Header'


class VeepApp extends Component {

    render() {
        return <Container>
            {/* <AppHeader/> */}
            <Router history={this.props.history}>
              <Switch>
                { routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Switch>
            </Router>
            {/* <AppFooter/> */}
          </Container>
    }
}

const mapActionToProps = {
}

const mapStateToProps = (state) => ({
})


export default connect(mapStateToProps, mapActionToProps)(VeepApp)
