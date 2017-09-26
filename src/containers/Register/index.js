import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import registerStyles from './styles.css'

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      emails: '',
      password: '',
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._onRegisterSubmit = this._onRegisterSubmit.bind(this);
  }

  _handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  _onRegisterSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className={registerStyles.form} onSubmit={(event) => this._onRegisterSubmit(event)}>
        <FormGroup controlId='formControlFirstname'>
          <ControlLabel className={registerStyles.formLabel}>{ this.props.language === 'EN' ? 'Firstname' : 'Vorname' }</ControlLabel>
          <FormControl type='text' placeholder='Max' name='firstname' onChange={(event) => this._handleInputChange(event)} />
        </FormGroup>
        <FormGroup controlId='formControlLastname'>
          <ControlLabel className={registerStyles.formLabel}>{ this.props.language === 'EN' ? 'Lastname' : 'Nachname' }</ControlLabel>
          <FormControl type='text' placeholder='Muster' name='lastname' onChange={(event) => this._handleInputChange(event)} />
        </FormGroup>
        <FormGroup controlId='formControlEmail'>
          <ControlLabel className={registerStyles.formLabel}>{ this.props.language === 'EN' ? 'Email address' : 'Email-Adresse' }</ControlLabel>
          <FormControl type='email' placeholder='max.m@me.de' name='email' onChange={(event) => this._handleInputChange(event)} />
        </FormGroup>
        <FormGroup controlId='formControlPassword'>
          <ControlLabel className={registerStyles.formLabel}>{ this.props.language === 'EN' ? 'Password' : 'Passwort' }</ControlLabel>
          <FormControl type='password' placeholder='********' name='password' onChange={(event) => this._handleInputChange(event)} />
        </FormGroup>
        <button className={registerStyles.submitButton}>{ this.props.language === 'EN' ? 'Register' : 'Registrieren' }</button>
        { this.props.language === 'EN' ?
          <p className={registerStyles.disclaimer + ' text-right pull-right'}>
            By clicking Register, you agree to our <a target="_blank" rel='noopener noreferrer' href="https://www.thehomelike.com/en/imprint-privacy-policy/">Privacy Policy</a> and <a target="_blank" rel='noopener noreferrer' href="https://www.thehomelike.com/en/terms-and-conditions/">Terms of Use</a> .
          </p> :
          <p className={registerStyles.disclaimer + ' text-right pull-right'}>
            Durch die Registrierung akzeptieren Sie unsere <a target='_blank' rel='noopener noreferrer' href='https://www.thehomelike.com/impressum-datenschutz/'>Datenschutzerklärung</a> und <a target='_blank' rel='noopener noreferrer' href='https://www.thehomelike.com/agb/'>Geschäftsbedingungen</a> .
          </p>
        }
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
)(Register)
