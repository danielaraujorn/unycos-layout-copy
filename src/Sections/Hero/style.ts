import styled from 'styled-components'
import { Section } from '../../components'
import heroLandscape from './assets/hero-landscape.jpg'
import heroPortrait from './assets/hero-portrait.jpg'

export const Container = styled(Section)`
  margin-top: 0;
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

export const BackgroundImage = styled.div`
  @media (min-width: 768px) {
    height: 480px;
    background: radial-gradient(
        48.06% 82.5% at 51.94% 45%,
        rgba(0, 0, 0, 0) 46.8%,
        #000000 100%
      ),
      linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 26.74%),
      url(${heroLandscape}) center no-repeat;

    h1 {
      font-size: 36px;
      line-height: 40px;
    }

    h2 {
      font-size: 28px;
      line-height: 32px;
    }
  }

  @media (max-width: 767px) {
    height: 380px;
    background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 26.74%),
      url(${heroPortrait}) center no-repeat;
    background-size: cover;

    h1 {
      font-size: 28px;
      line-height: 32px;
    }

    h2 {
      font-size: 20px;
      line-height: 24px;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-weight: 400;
  }

  h2 {
    strong {
      font-weight: initial;
    }
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-weight: 400;
    color: #858479;
  }
`
