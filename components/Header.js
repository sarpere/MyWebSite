
import './Header.scss'
import { i18n, Link, withTranslation } from '../i18n'
import { Routes } from "./Routes"
import { Container } from 'react-bootstrap'
const Header = ({ t }) => (
  <nav className="Header">
    {
      Routes.filter(Route => Route.listed).map((Route, i) =>
        <Link key={i} href={Route.path}>
          <a>
            {t(Route.label)}
          </a>
        </Link>
      )
    }
    <div
      className="nav-item nav-item-end"
      type='button'
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
    >{t('changeLang')}
    </div>
  </nav>
);

export default withTranslation('Header')(Header)