import { Pagination } from 'components'

import * as S from './styles'
import Guide from './Guide'

const Guides = props => {
  console.log(props)
  const guides = props.guides.map(guide => <Guide { ...guide} key={guide.slug}/>)
  
  return (
    <S.GuidesContainer>
      <Pagination elements={guides} maxElements={4}></Pagination>
    </S.GuidesContainer>
  )
}

export default Guides
