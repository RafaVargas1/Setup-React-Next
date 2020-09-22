import React from 'react';
import Head from 'next/head'

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title> Homepage </title>
      </Head>

        <h1> React JS + Next.JS </h1>
        <p> Estudo prático do Setup de Projetos que usam Next.js, TypeScript, ESLint e Styled Components </p>
    </Container>
  );
}


export default Home
