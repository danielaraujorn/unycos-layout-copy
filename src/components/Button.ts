import styled, { css } from 'styled-components'

const WIDTH_SIZES = {
  small: 180,
  normal: 304,
}

const FONT_SIZES = {
  small: 12,
  normal: 16,
}

export const Button = styled.button.attrs(({ type = 'button' }) => ({ type }))<{
  type?: 'button' | 'submit'
  size?: 'small' | 'normal'
  invertedColors?: boolean
}>`
  border: 2px solid
    ${({ invertedColors }) => (invertedColors ? '#1d1a05' : '#f1f1f1')};
  color: ${({ invertedColors }) => (invertedColors ? '#1d1a05' : '#f1f1f1')};
  font-weight: bold;
  border-radius: 4px;
  ${({ size = 'normal' }) => css`
    min-width: ${WIDTH_SIZES[size]}px;
    font-size: ${FONT_SIZES[size]}px;
  `}
  height:40px;
  padding: 10px 16px;
  max-width: 100%;
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;
`

export const ContainedButton = styled(Button)`
  border: none;
  color: #fff;
  background: #c5af19;
`
