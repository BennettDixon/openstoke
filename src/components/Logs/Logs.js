import { Pagination } from 'components'

import * as S from './styles'
import Log from './Log'

const Logs = props => {
  const logs = props.logs.map(log => <Log {...log} />)
  return (
    <S.LogsContainer>
      <Pagination elements={logs} maxElements={4}></Pagination>
    </S.LogsContainer>
  )
}

export default Logs
