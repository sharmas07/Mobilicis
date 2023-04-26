import './App.css'
import UsersWithLowIncome from './components/UsersWithLowIncome'
import UserCarBrandEmail from './components/UserCarBrandEmail'
import MalesPhonePriceGreater10000 from './components/MalesPhonePriceGreater10000'
import Top10Cities from './components/Top10Cities'
import UserLastNameM from './components/UserLastNameM'
import Selector from './components/Selector'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Selector />
    <Routes>
      <Route path='/users-income-bmw-mercedes' element={ <UsersWithLowIncome />} />
      <Route path='/male-users-phone-price-greater-than-10000' element={ <MalesPhonePriceGreater10000 />} />
      <Route path='/users-last-name-starts-with-m' element={ <UserLastNameM />} />
      <Route path='/users-car-brand-email' element={ <UserCarBrandEmail />} />
      <Route path='/top-10-cities' element={ <Top10Cities />} />
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
