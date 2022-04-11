import { useRouter } from 'next/router'

import * as S from './styles'

const Guide = props => {
  const { date, title, description } = props.frontMatter
  const { slug } = props
  const router = useRouter()

  const handleClick = () => {
    router.push(`/guides/${slug}`)
  }

  return (
    <S.Guide onClick={handleClick}>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Readmore>Read more...</S.Readmore>
    </S.Guide>
  )
}
export default Guide
