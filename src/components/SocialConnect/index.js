import React from 'react'

import socialConnectStyles from './styles.css'

function SocialConnect({ iconName, name, mode, hoverClass, language }) {
  const registerText = language === 'EN' ? `Connect with ${name}` : `Verbinden mit ${name}`
  const loginText = language === 'EN' ? `Login with ${name}` : `Einloggen mit ${name}`

  return (
    <button className={'' + socialConnectStyles.networkButton + ' ' + hoverClass}>
      <i className={`fa fa-${iconName} ${socialConnectStyles.networkIcon}`}></i>
      <span className={socialConnectStyles.networkText}>
        { mode === 'login' ? loginText : registerText }
      </span>
    </button>
  )
}

export default SocialConnect
