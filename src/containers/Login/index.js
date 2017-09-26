import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import loginStyles from './styles.css'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this._handleInputChange = this._handleInputChange.bind(this);
    this._onLoginSubmit = this._onLoginSubmit.bind(this);
  }

  _handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  _onLoginSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // Here the login funcionality will be executed
  }

  render() {
    return (
      <form className={loginStyles.form} onSubmit={(event) => this._onLoginSubmit(event)}>
        <FormGroup controlId="formControlEmail">
          <ControlLabel className={loginStyles.formLabel}>{ this.props.language === 'EN' ? 'Email address' : 'Email-Adresse' }</ControlLabel>
          <FormControl type="email" placeholder="max.m@me.de" name='email' onChange={(event) => this._handleInputChange(event)} />
        </FormGroup>
        <FormGroup controlId="formControlPassword">
          <ControlLabel className={loginStyles.formLabel}>{ this.props.language === 'EN' ? 'Password' : 'Passwort' }</ControlLabel>
          <FormControl type="password" placeholder='********' name='password' onChange={(event) => this._handleInputChange(event)} />
        </FormGroup>
        <button className={loginStyles.submitButton}>{ this.props.language === 'EN' ? 'Login' : 'Einloggen' }</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language.language
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
