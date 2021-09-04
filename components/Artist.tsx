import React from 'react'
import useTranslation from '../hooks/useTranslation'
import {useTheme} from 'next-themes'

const Artist: React.FC = () => {
  const { locale, t } = useTranslation()
  const {theme, setTheme} = useTheme()
  return (
    <div>
      <h1>René Magritte</h1>
      <p>{t('bio')}</p>
      <a href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>{t('readMore')}</a>
      <p className="italic">The quick brown fox ...</p>
      <p className="font-thin " >The quick brown fox ...</p>
      <p className="font-extralight " >The quick brown fox ...</p>
      <p className="font-light " >The quick brown fox ...</p>
      <p className="font-normal " >The quick brown fox ...</p>
      <p className="font-medium " >The quick brown fox ...</p>
      <p className="font-semibold " >The quick brown fox ...</p>
      <p className="font-bold " >The quick brown fox ...</p>
      <p className="font-extrabold " >The quick brown fox ...</p>
      <p className="font-black " >The quick brown fox ...</p>
      <h1 className="text-3xl text-pink-500">
        Welcome to Your App
      </h1>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Change Theme Mode
      </button>
    </div>
  )
}

export default Artist
