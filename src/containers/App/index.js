import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { addNetwork } from '../../modules/social-connect'
import { switchLanguage } from '../../modules/language'
import queryString from 'query-string'

import Login from '../Login'
import Register from '../Register'
import SocialConnect from '../../components/SocialConnect'
import Header from '../../components/Header'
import appStyles, {isActive} from './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'login'
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(newMode) {
    this.setState({mode: newMode});
  }

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
            <div className={appStyles.modal}>
              <div className={appStyles.navTabs}>
                <NavLink to={{ pathname: '/login', search: this.props.location.search}} className={appStyles.navTab} activeClassName={isActive} onClick={() => this.changeMode('login')}>
                  { this.props.language === 'EN' ? 'Login' : 'Log In' }
                </NavLink>
                <NavLink to={{ pathname: '/register', search: this.props.location.search}} className={appStyles.navTab} activeClassName={isActive} onClick={() => this.changeMode('register')}>
                  { this.props.language === 'EN' ? 'Register' : 'Registrierung' }
                </NavLink>
              </div>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/register' component={Register}></Route>
              <div className={appStyles.separator}>
                <div className={appStyles.separatorText}>{ this.props.language === 'EN' ? 'or' : 'oder' }</div>
              </div>
              { this.props.socialNetworks.map((network, index) => {
                return <SocialConnect key={network.icon} name={network.name} iconName={network.icon} mode={this.state.mode} hoverClass={network.hoverClass} language={this.props.language} />
              }) }
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language.language,
  location: state.routing.location,
  socialNetworks: state.socialConnect.socialNetworks
})

const mapDispatchToProps = dispatch => bindActionCreators({
  switchLanguage,
  addNetwork
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
