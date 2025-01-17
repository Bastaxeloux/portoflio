import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ProjectsRouter from './pages/projects';
import CVPage from './pages/CVPage';
import ScrollToTop from './pages/ScrollToTop';
import ProjectDetails from './pages/ProjectDetails';
import DynamicWelcome from './pages/Welcome';
import './App.css';

const HomePage = () => {
  useEffect(() => {
    const preloadImages = () => {
      const images = [
        'couv_jpeg.webp',
        'couv_tipe2.webp',
        'couv_pact.webp',
        'couv_tipe1.webp',
        'couv_data_panel.webp',
        'couv_pace.webp',
      ];

      images.forEach((image) => {
        const img = new Image();
        img.src = `/${image}`;
      });
    };
    preloadImages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <img
        src="/profile.webp"
        alt="Profile"
        className="rounded-full w-40 h-40 mb-6 border-4 border-black shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Le Guillouzic Maël</h1>
      <p className="italic text-gray-700 mb-4">mael.leguillouzic@telecom-paris.fr</p>
      <p className="text-lg max-w-xl mb-8 leading-relaxed text-gray-700 text-justify">
      I’m a student in <strong>AI and Mathematics</strong> at Télécom Paris, deeply curious and passionate about solving complex problems.
      I’ve been actively involved in student life as the <strong>President of my school’s Student Council</strong>, the sole organization in charge of campus life,
      which taught me the value of teamwork and leadership and allowed me to contribute to the campus community.
      Outside of academics, I love sports, <strong>competitive sailing</strong>, exploring <strong>geopolitics</strong>, and participating in <strong>hackathons</strong> or programming competitions.
      </p>

      <div className="flex space-x-4 mb-8">
        <Link
          to="/projets"
          className="inline-block bg-black text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-gray-800 hover:scale-105 transform transition-transform duration-300"
        >
          See my projects
        </Link>
        <Link
          to="/cv"
          className="inline-block bg-black text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-gray-800 hover:scale-105 transform transition-transform duration-300"
        >
          CV
        </Link>
      </div>

      <div className="flex space-x-4">
        <p className="italic text-gray-700 mb-4">My links :</p>
        <a
          href="https://www.linkedin.com/in/ma%C3%ABl-le-guillouzic-4381a618a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-gray-900 hover:text-blue-600" size={30} />
        </a>
        <a href="https://github.com/Bastaxeloux" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-900 hover:text-gray-700" size={30} />
        </a>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isProjectDetailPage = location.pathname.includes('/projets/') && location.pathname.split('/').length === 3;

  return (
    <div className="min-h-screen bg-dotted-pattern flex items-center justify-center p-4 md:p-8">
      <div className="h-auto mx-auto max-w-3xl bg-white border-2 border-black rounded-2xl px-6 py-8 md:px-12 relative shadow-sm">
        {location.pathname !== '/' && !isProjectDetailPage && (
          <div className="absolute top-6 left-6 md:left-8">
            <Link to="/" aria-label="Retour à l'accueil">
              <div className="bg-black p-2 rounded-full shadow-md hover:bg-gray-800 transition-colors">
                <ArrowLeft size={24} color="white" />
              </div>
            </Link>
          </div>
        )}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-6 right-6 md:right-8 z-50 hover:opacity-75 transition-opacity text-gray-900"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 top-16 bg-white border-2 border-black rounded-lg shadow-sm z-40 py-4 px-8 mr-4">
            <nav className="text-right">
              <Link
                to="/"
                className="block text-lg mb-4 text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/cv"
                className="block text-lg mb-4 text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CV
              </Link>
              <Link
                to="/projets"
                className="block text-lg text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </nav>
          </div>
        )}

        <div className="pt-8">{children}</div>
      </div>
    </div>
  );
};

function App() {
  const [showDynamicWelcome, setShowDynamicWelcome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setShowDynamicWelcome(true);
    }
  }, [location]);

  const handleAnimationEnd = () => {
    setShowDynamicWelcome(false);
  };

  return (
    <>
      <ScrollToTop />
      {showDynamicWelcome ? (
        <DynamicWelcome onAnimationEnd={handleAnimationEnd} />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/projets" element={<ProjectsRouter />} />
            <Route path="/projets/:id" element={<ProjectDetails />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
