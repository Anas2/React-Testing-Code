import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import UseMemoPractice from '../componants/UseMemoPractice';
import LazyLoading from '../componants/LazyLoading';

function Router() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='useMemo' element={<UseMemoPractice />} />
                <Route path='lazyLoading' element={<LazyLoading />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Router;

