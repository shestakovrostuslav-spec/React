import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import PhotoDetails from './components/PhotoDetails';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navbar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        {/* Динамічний маршрут для окремої роботи */}
                        <Route path="/gallery/:id" element={<PhotoDetails />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Обробка всіх невідомих URL */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;