import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { switchLanguage } from '../../modules/language'
import queryString from 'query-string'

import Header from '../../components/Header'
import Modal from '../../components/Modal'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import appStyles from './styles.css'

class App extends React.Component {
  
  componentWillMount() {
    const query = queryString.parse(this.props.location.search)
    if (query.language) {
      if (this.props.language !== query.language) this.props.switchLanguage(query.language)
    }
  }

  render() {
    return (
      <div className={appStyles.app}>
        <div className={appStyles.appOverlay}>
          <Header />
          <main className={appStyles.modalWrapper}>
            <Route exact path='/' component={Home} />
            <Modal>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Modal>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.routing.location,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  switchLanguage,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
