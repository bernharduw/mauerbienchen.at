import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Header = styled.header`
  transform: rotate(-3deg);
  margin-top: 25vh;
  margin-bottom: 15vh;
  text-align: center;
  font-family: 'Marck Script';
`

const Title = styled.h1`
  font-family: 'Marck Script';
  font-size: 32px;
  font-weight: 400;
  margin: 0.5em 1em;

  @media screen and (min-width: 640px) {
    font-size: 5vw;
  }
`

const Subtitle = styled.p`
  font-size: 24px;
  @media screen and (min-width: 640px) {
    font-size: 3.75vw;
  }
`

const P = styled.p`
  text-align: center;
  max-width: 30em;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <Header>
      <Title>Die Mauerbienen sind im Anflug!</Title>
      <Subtitle>Landung demnächst.</Subtitle>
    </Header>
    <P>
      Kontakt:{' '}
      <a href="mailto:daniela@mauerbienchen.at">daniela@mauerbienchen.at</a>
    </P>
  </Layout>
)

export default IndexPage
