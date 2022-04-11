import './App.scss'

import Header from './components/header/Header'
import Home from './pages/Home'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'


function App() {
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    )
}

export default App