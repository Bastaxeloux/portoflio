import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ProjectsRouter from './pages/projects';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CVPage from './pages/CVPage';
import ProjectDetails from './pages/ProjectDetails';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <img
        src="/pdp-portfolio.jpg"
        alt="Profile"
        className="rounded-full w-40 h-40 mb-6 border-4 border-black shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-900 animate-fadeIn" style={{ animationDelay: '0.2s' }}>Le Guillouzic Maël</h1>
      <p className="italic text-gray-700 mb-4">mael.leguillouzic@telecom-paris.com</p>
      <p className="text-lg text-center max-w-xl mb-8 leading-relaxed text-gray-700">
      I am an AI and Mathematics student at Télécom Paris, driven by curiosity and a 
      passion for solving complex problems. I thrive in environments that challenge me to learn continuously and innovate. 
      Besides my studies, I enjoy sport, competitive sailing and geopolitics. I am also deeply involved in 
      student associations, having served as the President of my school's Student Council.
      </p>

      <Link
        to="/projets"
        className="inline-block bg-black text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-gray-800 hover:scale-105 transform transition-transform duration-300 mb-8"
      >
        Voir mes projets
      </Link>

      {/* Liens vers réseaux sociaux */}
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/ma%C3%ABl-le-guillouzic-4381a618a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-900 hover:text-blue-600" size={30} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-900 hover:text-gray-700" size={30} />
        </a>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dotted-pattern flex items-center justify-center p-4 md:p-8">
      {/* Conteneur principal avec bordure */}
      <div className="h-auto mx-auto max-w-3xl bg-white border-2 border-black rounded-2xl px-6 py-8 md:px-12 relative shadow-sm">
        {/* Bouton Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-6 right-6 md:right-8 z-50 hover:opacity-75 transition-opacity text-gray-900"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Menu Navigation - Plus discret */}
        {isMenuOpen && (
          <div className="absolute right-0 top-16 bg-white border-2 border-black rounded-lg shadow-sm z-40 py-4 px-8 mr-4">
            <nav className="text-right">
              <Link
                to="/"
                className="block text-lg mb-4 text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
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
                Projets
              </Link>
            </nav>
          </div>
        )}

        {/* Contenu de la page */}
        <div className="pt-8">
          {children}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/projets/*" element={<ProjectsRouter />} />
          <Route path="/projets/:projectId" element={<ProjectDetails />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;