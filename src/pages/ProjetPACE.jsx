import React from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetPACE',
        title: 'PACE : Projet D\'écriture',
        description: 'Ecriture d\'un ouvrage sur le symbolisme phonétique',
        details: 'Copie d\'un magazine du Monde dans le style',
        pdf: '/PACE.pdf',
        pages: [
            '/pace/PACE 1.webp', '/pace/PACE 2.webp', '/pace/PACE 3.webp', '/pace/PACE 4.webp', '/pace/PACE 5.webp',
            '/pace/PACE 6.webp', '/pace/PACE 7.webp', '/pace/PACE 8.webp', '/pace/PACE 9.webp', '/pace/PACE 10.webp',
            '/pace/PACE 11.webp', '/pace/PACE 12.webp', '/pace/PACE 13.webp', '/pace/PACE 14.webp', '/pace/PACE 15.webp',
            '/pace/PACE 16.webp', '/pace/PACE 17.webp', '/pace/PACE 18.webp', '/pace/PACE 19.webp', '/pace/PACE 20.webp',
            '/pace/PACE 21.webp', '/pace/PACE 22.webp', '/pace/PACE 23.webp', '/pace/PACE 24.webp', '/pace/PACE 25.webp',
            '/pace/PACE 26.webp', '/pace/PACE 27.webp', '/pace/PACE 28.webp', '/pace/PACE 29.webp', '/pace/PACE 30.webp',
            '/pace/PACE 31.webp', '/pace/PACE 32.webp', '/pace/PACE 33.webp', '/pace/PACE 34.webp', '/pace/PACE 35.webp',
            '/pace/PACE 36.webp', '/pace/PACE 37.webp', '/pace/PACE 38.webp', '/pace/PACE 39.webp', '/pace/PACE 40.webp',
            '/pace/PACE 41.webp', '/pace/PACE 42.webp', '/pace/PACE 43.webp', '/pace/PACE 44.webp', '/pace/PACE 45.webp',
            '/pace/PACE 46.webp', '/pace/PACE 47.webp', '/pace/PACE 48.webp'
        ]
    }
];

const ProjetPACE = () => {
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
                <h1 className="text-4xl font-bold mb-6 text-gray-900 justify-center">{project.title}</h1>

                {/* Abstract */}
                <p className="text-lg italic text-gray-700 mb-6 text-justify">
                    Abstract: Le PACE est un projet d'écriture libre, réalisé en première année d'ingénieur.
                    L'intitulé fut : écrivez sur ce que vous voulez et comme vous le souhaitez !
                </p>
                <p className="text-lg  text-gray-700 mb-6 text-center">
                    <strong>L'intégralité de ce projet fut écrit par mes soins</strong>
                </p>
                <p className="text-lg text-gray-700 mb-6 text-justify">
                    J'ai donc décidé de m'inspirer d'un magazine du Monde pour la mise en page, avec ses pubs, ses belles images et ses articles; sur un thème qui m'intéressait mais sur lequel je n'avais
                    que très peu de connaissances : le symbolisme phonétique.
                <br />
                    Le pdf est téléchargeable ci-dessous, et il est recommandé de la lire en <strong>double page</strong> pour une meilleure expérience (comme un magazine, avec la couverture puis les pages deux par deux).
                    Le cas échéant, il est disponible en galerie ci-dessous.
                </p>

                {/* Boutons vers PDF et GitHub */}
                <div className="flex justify-center mb-8">
                    <a
                        href={project.pdf}
                        className="inline-block bg-white text-red-600 font-medium py-2 px-6 rounded-full border border-red-600 shadow-md hover:bg-red-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Télécharger en PDF
                    </a>
                </div>

                <hr className="my-10 mb-8 border-t border-gray-500 w-full" />

                {/* Affichage de la couverture centrée */}
                <div className="flex justify-center mb-8">
                    <img src={project.pages[0]} alt="Couverture" className="w-1/2 shadow-md" />
                </div>

                {/* Galerie double-page sans espace entre les pages */}
                <div className="space-y-8">
                    {project.pages.slice(1).map((page, index) => (
                        index % 2 === 0 && (
                            <div key={index} className="flex justify-center items-center">
                                <img src={page} alt={`Page ${index + 1}`} className="w-1/2 shadow-md mb-2" />
                                {project.pages[index + 2] && (
                                    <img src={project.pages[index + 2]} alt={`Page ${index + 2}`} className="w-1/2 shadow-md mb-2" />
                                )}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </MathJaxContext>
    );
};

export default ProjetPACE;