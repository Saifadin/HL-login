import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import SocialConnect from '../../components/SocialConnect'
import modalStyles, {isActive} from './styles.css'

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'login'
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(newMode) {
    console.log(newMode)
    this.setState({ mode: newMode })
  }

  componentWillMount() {
    this.changeMode(this.props.location.pathname.substring(1))
  }

  render() {
    return (
      <div className={modalStyles.modal}>
        <div className={modalStyles.navTabs}>
          <NavLink to='/login' className={modalStyles.navTab} activeClassName={isActive} onClick={() => this.changeMode('login')}>
            { this.props.language === 'EN' ? 'Login' : 'Log In' }
          </NavLink>
          <NavLink to='/register' className={modalStyles.navTab} activeClassName={isActive} onClick={() => this.changeMode('register')}>
            { this.props.language === 'EN' ? 'Register' : 'Registrierung' }
          </NavLink>
        </div>
        { this.props.children }
        <div className={modalStyles.separator}>
          <div className={modalStyles.separatorText}>{ this.props.language === 'EN' ? 'or' : 'oder' }</div>
        </div>
        { this.props.socialNetworks.map((network, index) => {
          return <SocialConnect key={network.icon} name={network.name} iconName={network.icon} mode={this.state.mode} hoverClass={network.hoverClass} language={this.props.language} />
        }) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language.language,
  location: state.routing.location,
  socialNetworks: state.socialConnect.socialNetworks
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
