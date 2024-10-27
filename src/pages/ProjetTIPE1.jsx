import React, {useState} from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetTIPE1',
        title: 'Détection de falsification via compression JPEG',
        description: 'Étude sur la détection de falsification d\'images basée sur le format de compression JPEG.',
        details: 'Ce projet explore l\'utilisation des coefficients de la DCT pour détecter des falsifications d\'images.',
        github: 'https://github.com/Bastaxeloux/ima-compressionjpg-main',
        pdf: '/article_zero.pdf',
    }
];

const FunctionDetail = ({ functionName, functionDescription, functionCode }) => {
    const [isOpen, setIsOpen] = useState(false); // État pour gérer la visibilité du contenu

    const toggleDetails = () => {
        setIsOpen(!isOpen); // Inverser l'état au clic
    };

    return (
        <div className="mb-8">
            {/* Nom de la fonction avec bouton discret */}
            <div className="flex justify-between items-center">
                <p className="font-mono">
                    <span className="text-purple-600">def </span>
                    <span className="text-blue-500">{functionName}</span>
                    <span className="text-gray-700">():</span>
                </p>
                <button
                    onClick={toggleDetails}
                    className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    {isOpen ? "Masquer le code" : "Voir le code"}
                </button>
            </div>

            {/* Explication affichée avec un décalage à droite et une barre verticale */}
            <div className="border-l-4 border-gray-300 pl-4 ml-2">
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    {functionDescription}
                </p>
            </div>

            {/* Affichage conditionnel du code avec indentation */}
            {isOpen && (
                <div className="mt-4">
                    {/* Détail de la fonction dans un style code */}
                    <pre className="bg-gray-900 text-white p-4 rounded-lg shadow-md whitespace-pre-wrap">
                        {functionCode}
                    </pre>
                </div>
            )}
        </div>
    );
};

const ProjetTIPE1 = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    const config = {
        loader: { load: ['input/asciimath', 'output/chtml'] },
    };

    // Vérifier si le projet existe
    if (!project) {
        return <div> Project not found... Id = {id}</div>;
    }

    return (
        <MathJaxContext config={config}>
            <div className="py-14 px-1 max-w-4xl mx-auto bg-white">
                {/* Bouton de retour */}
                <div className="flex justify-start mb-8">
                    <Link
                        to="/projets"
                        className="inline-block bg-black text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors"
                    >
                        ← Back to Projects
                    </Link>
                </div>

                {/* Titre */}
                <h1 className="text-4xl font-bold mb-6 text-gray-900">{project.title}</h1>

                {/* Abstract */}
                <p className="text-lg italic text-gray-700 mb-6 text-justify">
                    Abstract: Le projet étudie le format de compression JPEG afin de détecter de possibles falsifications de l'image, 
                    en utilisant la méthode du papier de recherche ci-dessous. L'ensemble du code et des images est disponible sur la page GitHub.
                    <br />
                    <strong>Outils</strong> : Python et les bibliothèques : scikit-learn, scipy, OpenCV (cv2), numpy
                </p>

                {/* Boutons vers PDF et GitHub */}
                <div className="flex justify-center space-x-4 mb-8">
                    <a
                        href={project.pdf}
                        className="inline-block bg-blue-800 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lire l'article de recherche
                    </a>
                    <a
                        href={project.github}
                        className="inline-block bg-green-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Voir sur GitHub
                    </a>
                </div>

            </div>    
        </MathJaxContext>
    );
};

export default ProjetTIPE1;
