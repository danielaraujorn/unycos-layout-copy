import styled from 'styled-components'
import checkmark from './assets/checkmark.svg'
import strongThumbsUp from './assets/strong_thumbs_up.svg'

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #858479;
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    strong {
      color: #c5af19;
    }
  }
`

export const StrongThumbsUp = styled.img.attrs({
  src: strongThumbsUp,
  alt: 'thumbs up',
})`
  margin-right: 10px;
  margin-bottom: 4px;
`

export const AvatarContainer = styled.div`
  margin-top: 6px;
  margin-right: 16px;
  min-width: 80px;
`

export const Name = styled.p`
  line-height: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  span {
    margin-left: 6px;
    color: #858479;
  }
  strong {
    color: #c5af19;
  }
`

export const Text = styled.p`
  line-height: 20px;
`

export const Comments = styled.div`
  width: 100%;
  max-width: 750px;
  margin: auto;
`

export const Comment = styled.div`
  padding: 18px 0;
  display: flex;
  div {
    display: flex;
    flex-direction: column;
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #858479;
  }
  p {
    margin: 6px 0;
    text-align: left;
    font-size: 16px;
    letter-spacing: 2px;
    color: #d8d7ce;
  }
`

export const Reply = styled.div`
  width: 100%;
  padding-top: 6px;
  max-width: 750px;
  margin-top: 12px;
  border-top: 1px solid #858479;
  ${Text} {
    color: #858479;
  }
  ${Name} {
    text-transform: initial;
  }
`

export const Like = styled.button`
  outline: none;
  border: none;
  background: transparent;
  height: 22px;
  cursor: pointer;
  margin-left: 20px;
  img {
    height: 14px;
  }
`

export const Verified = styled.img.attrs({ src: checkmark, alt: 'verified' })`
  margin-right: 6px;
`
