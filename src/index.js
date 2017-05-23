import React, {Component} from 'react';
import {Provider} from 'react-redux';
import createHistory from 'history/createMemoryHistory'
import createStore from './models/store'
import rootSaga from './models/saga'
import VeepApp from './VeepApp'


const history = createHistory()
const store = createStore(history)

store.runSaga(rootSaga).done

export default class Veep extends Component {
    render() {
        return (
          <Provider store={store}>
            <VeepApp history={history}/>
          </Provider>
        )
    }
}
