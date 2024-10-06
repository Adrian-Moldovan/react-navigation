import './App.css'
import RandomColors from './components/RandomColors'
import RandomDigits from './components/RandomDigits'
import RandomExcuse from './components/RandomExcuse'

function App() {

  return (
    <>
      {/* <h1>Navigation</h1>
      <div>
        here we go
      </div> */}
      <RandomDigits/>
      <RandomColors/>
      <RandomExcuse/>
    </>
  )
}

export default App
