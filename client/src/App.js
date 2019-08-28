import React from 'react'

import NavBar from './components/NavBar'
import AppRouter from './components/router/AppRouter'
import Footer from './components/footer/Footer'

import 'semantic-ui-css/semantic.min.css'
import { GlobalStyles, PageContainer, ContentWrap } from './StyledComps'

function App() {
  return (
    <PageContainer>
      <GlobalStyles />
      
      <NavBar />

      <ContentWrap>
        <AppRouter />
      </ContentWrap>
      
      <Footer />
    </PageContainer>
  )
}

export default App
