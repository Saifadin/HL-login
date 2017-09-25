import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import loginStyles from './styles.css'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
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
  }

  render() {
    return (
      <form className={loginStyles.form} onSubmit={(event) => this._onLoginSubmit(event)}>
        <FormGroup controlId="formControlsEmail">
          <ControlLabel className={loginStyles.formLabel}>{ this.props.language === 'EN' ? 'Email address' : 'Email-Adresse' }</ControlLabel>
          <FormControl type="email" placeholder="max.m@me.de" onChange={(event) => this._handleInputChange(event)} />
        </FormGroup>
        <FormGroup controlId="formControlsPassword">
          <ControlLabel className={loginStyles.formLabel}>{ this.props.language === 'EN' ? 'Password' : 'Passwort' }</ControlLabel>
          <FormControl type="password" placeholder='********' onChange={(event) => this._handleInputChange(event)} />
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
