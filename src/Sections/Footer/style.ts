import styled, { css } from 'styled-components'

const BREAKPOINT = 767

export const Container = styled.footer`
  margin: 0;
  margin-top: 40px;
  padding: 16px 24px 0;
  @media (max-width: ${BREAKPOINT}px) {
    padding: 16px 8px 0;
  }
  hr {
    max-width: 480px;
    width: 100%;
    border-color: #858479;
  }
`
export const Row = styled.div<{ $wrap?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ $wrap }) =>
    $wrap &&
    css`
      flex-wrap: wrap;
    `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WhatsappContainer = styled(Column)`
  margin: 30px auto 40px;
  p {
    margin-top: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
  }
  button {
    display: flex;
    justify-content: center;
    img {
      margin-right: 5px;
      width: 12px;
    }
  }
`

export const LogoContainer = styled(Row)`
  width: 140px;
  height: 48px;
  margin-right: auto;
  justify-content: flex-start;
  img {
    height: 24px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 16px;
    img {
      height: 16px;
    }
  }
`
export const SocialMedia = styled(Row)`
  justify-content: center;
  a {
    margin: 10px 16px;
  }
`

export const CentraLinks = styled.ul`
  display: flex;
  justify-content: center;
  width: 60%;
  max-width: 480px;
  list-style: none;
  padding: 0;
  margin: 16px auto;
  @media (max-width: ${BREAKPOINT}px) {
    margin: 8px auto;
    order: 1;
    width: 100%;
  }
  li {
    a {
      text-decoration: none;
      font-size: 14px;
      line-height: 16px;
      @media (max-width: 1000px) {
        font-size: 12px;
        line-height: 16px;
      }
      @media (max-width: 600px) {
        font-size: 8px;
        line-height: 10px;
      }
      color: #858479;
      cursor: pointer;
    }
    padding: 0 16px;
    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
    }
  }
`

export const Currencies = styled(Row)`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  height: 48px;
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 8px;
    height: 16px;
  }
  width: 140px;
  justify-content: flex-end;
  margin-left: auto;
  span {
    color: #858479;
  }
`

export const Currency = styled.a<{ selected?: boolean }>`
  padding: 6px;
  color: ${({ selected }) => (selected ? '#ffffff' : '#858479')};
`
