import React from 'react'
import useTranslation from '../../hooks/useTranslation'

const MyHeader: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="font-nikin-heavy uppercase">{t('notAPipe')} Logo của tận đẹp trai</h1>
      <img src="/img/not_a_pipe.jpg" alt={t('notAPipe')} />
    </div>
  )
}

export default MyHeader
