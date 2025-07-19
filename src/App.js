import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page.js'

import Home from './pages/Home'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomerEdit from './pages/customers/Edit'

const App = () => {
  return (

    <Router>
      <TemplateDefault>
        
        <Routes>

          <Route path="/customers/edit/:id" element={
            <TemplatePage title="Editar Cliente">
              <CustomerEdit />
            </TemplatePage>} />

          <Route path="/customers/add" element={
            <TemplatePage title="Cadastro de Clientes">
              <CustomersRegister />
            </TemplatePage>} />

          <Route path="/customers" element={
            <TemplatePage title="Lista de Clientes">
              <CustomersList />
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