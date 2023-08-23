"use client"
import Image from 'next/image'
import { ThemeProvider, styled } from 'styled-components'
import { darkTheme } from '@/utils/Themes';
import Navbar from '@/components/Navbar';
import Hero from '@/components/HeroSection';
import Skills from '@/components/Skills';

function Home() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Navbar/>
        <Body>
          <Hero/>
          <Skills/>
        </Body>
      </ThemeProvider>
    )
}

export default Home;

const Body = styled.div`
background-color: ${({theme}) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;