import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import { Route, Switch } from 'react-router-native'
import { NativeRouter } from 'react-router-native'
import createHistory from 'history/createMemoryHistory'
import { ConnectedRouter as Router } from 'react-router-redux'
import createStore from './models/store'
import rootSaga from './models/saga'
import routes from './routes'
import { Container, Header, Title, Button, Body } from 'native-base';
import AppFooter from './containers/Footer'


const history = createHistory()
const store = createStore(history)

store.runSaga(rootSaga).done

export default class Veep extends Component {
    render() {
        return <Provider store={store}>
          <Container>
            <Header>
                <Body>
                    <Title>Header</Title>
                </Body>
            </Header>
            <Router history={history}>
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
            <AppFooter/>
            {/* <Footer>
              <FooterTab>
                  <Button>
                      <Text>Login</Text>
                  </Button>
                  <Button>
                      <Text>Home</Text>
                  </Button>
              </FooterTab>
            </Footer> */}
          </Container>
        </Provider>
    }
}
