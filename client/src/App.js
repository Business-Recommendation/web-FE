import React from 'react'

import NavBar from './Components/NavBar'
import AppRouter from './Components/router/AppRouter'
import Footer from './Components/footer/Footer'

import 'semantic-ui-css/semantic.min.css'
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
