import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { switchLanguage } from '../../modules/language'
import { Link } from 'react-router-dom'
import styles from './Header.css'

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      language: this.props.language
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      language: props.language
    })
  }

  onChange(e) {
    this.props.switchLanguage(e.target.value);
    this.setState({
      language: e.target.value
    })
  }

  render() {
    return (
      <header className={styles.header}>
          <Link to='/' className={styles.logo}>
            <img src='/homelike.png' alt='Homelike Logo' className={styles.logo} />
          </Link>
          <select className={styles.select} value={this.state.language} onChange={(event) => this.onChange(event)}>
            <option value='DE'>DE</option>
            <option value='EN'>EN</option>
          </select>
          <i className={styles.menu + ' fa fa-bars fa-2x'}></i>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language.language
})

const mapDispatchToProps = dispatch => bindActionCreators({
  switchLanguage
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
