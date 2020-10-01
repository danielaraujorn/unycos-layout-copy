import styled from 'styled-components'

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

export const Checkmark = styled.span`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  position: relative;
  padding-left: 35px;
  font-size: 14px;
  line-height: 16px;
  width: 100%;
  margin: 8px;
  max-width: 368px;
  min-width: 300px;
  label,
  label > span {
    color: #858479;
    strong {
      color: #fff;
    }
  }
  &:hover ${CheckboxInput} ~ ${Checkmark} {
    background-color: #ccc;
  }
  ${CheckboxInput}:checked ~ ${Checkmark} {
    background-color: #c5af19;
    border-color: #c5af19;
    &:after {
      display: block;
    }
  }
`
