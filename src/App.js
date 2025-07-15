import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page.js'
import Home from './pages/Home'
import Customers from './pages/Customers.js'

const App = () => {
  return (

    <Router>
      <TemplateDefault>
        <Routes>

          <Route path="/customers" element={
            <TemplatePage title="Clientes">
              <Customers />
            </TemplatePage>} />

          <Route path="/" element={
            <TemplatePage title="Página Inicial">
              <Home />
            </TemplatePage>} />
        </Routes>
        
      </TemplateDefault>
    </Router>

  )
}

export default App   