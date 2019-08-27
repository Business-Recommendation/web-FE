import React from 'react'

import NavBar from './components/NavBar'
import AppRouter from './components/router/AppRouter'
import Footer from './components/footer/Footer'

import { PageContainer, ContentWrap } from './StyledComps'

function App() {
  return (
    <PageContainer>
      <NavBar />

      <ContentWrap>
        <AppRouter />
      </ContentWrap>
      
      <Footer />
    </PageContainer>
  )
}

export default App
