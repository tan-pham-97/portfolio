import { FormattedMessage } from 'react-intl'

function Header() {
  return (
    <div>
      <h1><FormattedMessage id="greeting" /></h1>
    </div>
  )
}

export default Header;