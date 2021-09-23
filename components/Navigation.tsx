import React from 'react'
import Link from 'next/link'
import useTranslation from '../hooks/useTranslation'
import LocaleSwitcher from './LocaleSwitcher'

const Navigation = () => {
  const { locale, t } = useTranslation()
  return (
    <ul className="root">
      <li>
        <LocaleSwitcher />
      </li>
      <li>
        <Link href="/[lang]" as={`/${locale}`}>
          <a>{t('painting')}</a>
        </Link>
      </li>
      <li>
        <Link href="/[lang]/artist" as={`/${locale}/artist`}>
          <a>{t('artist')}</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
