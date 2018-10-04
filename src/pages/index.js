import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
  transform: rotate(-3deg);
  margin-top: 25vh;
  margin-bottom: 15vh;
  text-align: center;
  font-size: 32px;
  @media screen and (min-width: 640px) {
    font-size: 5vw;
  }
`

const P = styled.p`
  text-align: center;
  max-width: 30em;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <Title>Die Mauerbienen sind im Anflug!</Title>
    <P>
      Kontakt:{' '}
      <a href="mailto:daniela@mauerbienchen.at">daniela@mauerbienchen.at</a>
    </P>
  </Layout>
)

export default IndexPage
