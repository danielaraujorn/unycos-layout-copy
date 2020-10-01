import React, { ReactElement } from 'react'
import {
  Container,
  LogoContainer,
  Currencies,
  Currency,
  SocialMedia,
  CentraLinks,
  Column,
  Row,
  WhatsappContainer,
} from './style'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import youtube from './assets/youtube.svg'
import whatsapp from './assets/whatsapp.svg'
import logo from '../../assets/logo.svg'
import { SectionTitle, Hidden, Button } from '../../components'

export const Footer = (): ReactElement => {
  return (
    <>
      <Container>
        <Column>
          <Hidden up="md">
            <SectionTitle>Únete a la comunidad</SectionTitle>
          </Hidden>
          <SocialMedia>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="facebook" src={facebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram" src={instagram} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="twitter" src={twitter} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="youtube" src={youtube} />
            </a>
          </SocialMedia>
          <Hidden down="md">
            <hr />
          </Hidden>
          <Hidden up="md">
            <WhatsappContainer>
              <p>¿Dudas? Contáctanos por whatsapp</p>
              <Button size="small">
                <img alt="whatsapp" src={whatsapp} />
                +34 653 46 73 60
              </Button>
            </WhatsappContainer>
          </Hidden>
        </Column>
        <Row $wrap>
          <LogoContainer>
            <img alt="Unycos" src={logo} />
          </LogoContainer>
          <CentraLinks>
            <li>
              <a href="/">Terminos y condiciones</a>
            </li>
            <li>
              <a href="/">Política de privacidad</a>
            </li>
            <li>
              <a href="/">Aviso legal</a>
            </li>
          </CentraLinks>
          <Currencies>
            <Currency selected={true}>USD($)</Currency>
            <span>/</span>
            <Currency selected={false}>EUR(€)</Currency>
          </Currencies>
        </Row>
        {/* <div id="unycos-footer" className="unycos-footer margin-top-medium">
        <div className="container-fluid">
        <div className="row middle-xs">
        <div className="col-xs-12 center-xs align-center">
        <div className="footer-social margin-bottom-medium">
        <span className="display-block center-xs normal-font text-uppercase white-color font-size-normal margin-bottom-normal hidden-lg">
        Únete a la comunidad
        </span>
        <a
        href="https://www.facebook.com/Unycos-1810489795637936"
        target="_blank"
        rel="noopener noreferrer"
        >
        <img
        alt="facebook"
        src="/_next/static/images/facebook-outline-a6bf3e167f3d54a99842a3d8253daf19.svg"
                    title=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/unycos_com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="instagram"
                    src="/_next/static/images/instagram-547bdc313ace5b5c5340af37ff90c28c.svg"
                    title=""
                  />
                </a>
                <a
                  href="https://twitter.com/unycos_com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="twitter"
                    src="/_next/static/images/twitter-outline-50f722883cd257176905c2f2fea998aa.svg"
                    title=""
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCVZBWcLu24xdANe9zpPn2FQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="youtube"
                    src="/_next/static/images/youtube-3ef3eb5499dfc5d6ed7493a1c01894cc.svg"
                    title=""
                  />
                </a>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="hidden-lg footer-cta center-xs align-center">
                <div className="box-whatsapp">
                  <a
                    className="btn main-border big main-color margin-top-normal margin-bottom-normal text-uppercase"
                    href="https://wa.me/573127131460"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-whatsapp"
                      style={{ margin: 0, marginRight: 8 }}
                    ></i>
                    Contacta con tu asesor personal
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-6 col-md-3 first-xs">
              <div className="footer-logo">
                <a href="/">
                  <img alt="Unycos" src={logo} />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 center-xs last-xs first-md">
              <ul className="footer-menu">
                <li>
                  <a href="/terminos-de-uso/">Términos y condiciones</a>
                </li>
                <li>
                  <a href="/privacidad/">Política de privacidad</a>
                </li>
                <li>
                  <a href="/aviso-legal/">Aviso legal</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3 end-xs">
              <div className="footer-currency end-xs">
                <span>
                  <a className="btn transparent-border small white-color text-uppercase">
                    <span style={{ fontWeight: 'bold' }}>EUR(€)</span>
                  </a>
                  <span className="currency-spacer">/</span>
                </span>
                <span>
                  <a className="btn transparent-border small white-color text-uppercase">
                    <span style={{ fontWeight: 'normal' }}>USD($)</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </Container>
    </>
  )
}
