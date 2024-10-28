import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetPACT',
        title: 'Manchette Vibrante pour Sourds et Malentendants (MVSM)',
        description: 'Élaboration manchette qui vibre dans la direction de la source sonore et proportionnellement à l\'intensité du son.',
        details: 'Construction d\'un prototype et présentation de ce dernier à un jury.',
    }
];

const ProjetPACT = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    const config = {
        loader: { load: ['input/asciimath', 'output/chtml'] },
    };

    // État pour afficher l'affiche en plein écran
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Vérifier si le projet existe
    if (!project) {
        return <div> Project not found... Id = {id}</div>;
    }

    return (
        <MathJaxContext config={config}>
            <div className="py-14 px-4 max-w-5xl mx-auto bg-white">
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
                    Abstract: Projet de première année d'ingénieur à Télécom Paris, consistant à élaborer une manchette vibrante pour les sourds et malentendants. 
                    La manchette vibre dans la direction de la source sonore et proportionnellement à l'intensité du son. 
                    Construction d'un prototype et présentation de ce dernier à un jury.
                </p>

                {/* Détails du projet */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800">Détails du Projet</h3>
                    <p className="text-gray-700 text-justify">
                        Vous marchez dans la rue, une voiture passe sur votre gauche, un musicien joue de la guitare sur la petite place qui vous fait face 
                        et un peu plus haut dans la petite rue que vous venez de dépasser s'activait un chantier de rénovation d'un immeuble.
                        Sans meme tourner les yeux, votre ouie recréer autour de vous un tableau sonore de votre environnement.
                        <br />
                        <strong>L'ouie vous permet d'apprécier le monde qui vous entoure, au même titre que la vue l'odorat.</strong>
                    </p>

                    <p className="text-gray-700 text-justify mt-4"></p>

                    <p className="text-gray-700 text-justify mt-4">
                        Mais que se passe-t-il si vous n'avez pas la chance de pouvoir entendre ?
                        Comment pouvez-vous apprécier le monde qui vous entoure si vous ne pouvez pas entendre les bruits de la rue, les oiseaux qui chantent,
                        les voitures qui passent ou les gens qui parlent ?

                        C'est pour répondre à cette problématique que nous avons décidé de créer une manchette vibrante pour sourds et malentendants.
                        Cette manchette vibre dans la direction de la source sonore et proportionnellement à l'intensité du son.
                    </p>
                </div>

                {/* Section Affiche */}
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Affiche du Projet</h2>
                    <p className="text-gray-700 mb-6 italic">Cliquer sur l'image pour la voir en grand.</p>
                    <div className="flex justify-center">
                        <img
                            src="/affiche.webp"
                            alt="Affiche du Projet MVSM"
                            className="w-full max-w-3xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => setIsLightboxOpen(!isLightboxOpen)}
                        />
                    </div>

                    {/* Lightbox pour voir l'affiche en grand */}
                    {isLightboxOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setIsLightboxOpen(false)}>
                            <img
                                src="/affiche.webp"
                                alt="Affiche du Projet MVSM"
                                className="w-auto max-h-full max-w-full rounded-lg shadow-lg"
                            />
                        </div>
                    )}
                </div>

                <p className="text-gray-700 text-justify mt-4">
                        Ce projet fut réalisé en groupe, au cours de notre première année d'ingénieur.
                        Une grosse partie du travail de mon binome fut d'interviewer des personnes sourdes et malentendantes pour comprendre leurs besoins et leurs attentes.
                        Nous avons ensuite travaillé sur la conception de la manchette, la programmation de la carte Arduino et la construction du prototype.
                </p>

                <div className="flex justify-center space-x-4 mb-12 mt-10">
                    <img
                        src="/manchette.webp"
                        alt="Manchette 1"
                        className="w-1/2 max-w-sm rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                    <img
                        src="/manchette2.webp"
                        alt="Manchette 2"
                        className="w-1/2 max-w-sm rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>


                <div className="flex justify-center">
                    <video
                        src="/video-manchette.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-xs rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </MathJaxContext>
    );
};

export default ProjetPACT;
