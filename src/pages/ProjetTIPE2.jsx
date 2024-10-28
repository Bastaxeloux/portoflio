import React, {useState} from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetTIPE2',
        title: 'Utilisation de réseaux phasés notamment pour l’imagerie par échographie',
        description: 'Les antennes à balayage de phase sont des antennes qui permettent de modifier la direction du faisceau émis sans bouger l\'antenne.',
        details: 'Dans ce projet de physique pour les concours, j\'ai étudié le fonctionnement théorique de tels dispositifs avant d\'en réaliser un prototype fonctionnel.',
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

const ProjetTIPE2 = () => {
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
                    Abstract: Mon sujet qui porte sur les réseaux phasés, essaie de comprendre le fonctionnement théorique de ces dernier et construit une maquette utilisant ce principe.
                </p>

                <div className="mb-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">1. Introduction</h3>
                    <p className="text-gray-700 text-justify mb-10">
                    Les premières utilisations remontent au début du 20eme siècle dans les télécommunication et plus tard pour le repérage des avions lors du décollage et de l’atterrissage lors de la seconde guerre mondiale. Ils sont aujourd’hui utilisés dans de nombreux domaines, notamment médicaux comme l’imagerie par échographie.
                    <br />
                    <strong>Pourquoi utiliser une telle antenne ?</strong><br />
                    Un transducteur classique à ultrasons présente un lobe d’émission large et peu directif et n’est pas orientable. Pour résoudre ce problème on place en parallèle plusieurs émetteurs qui ont pour objectif d’affiner le lobe d’émission, et en les commandant en phase, il est possible d’orienter le signal.
                    </p>
                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 2.webp" alt="Diapo 2" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Le sujet s’attachera à comprendre le fonctionnement de telles antennes et à essayer de construire un modèle. On étudiera donc dans un premier temps les caractéristique des nos émetteurs avec lesquels on travaillera, puis on étudiera l’affinement du faisceau, et enfin la directivité.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 3.webp" alt="Diapo 3" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">2. Caractéristiques des émetteurs</h3>
                    <p className="text-gray-700 text-justify mb-10">
                    On utilisera pour émettre notre onde ultrasonore des transducteurs piézoélectriques, qui sont de petits cristaux qui, soumis à une tension vibrent dans une bande de fréquence très fine. La datasheet constructeur indique ainsi une fréquence de résonance de 40 kHz plus ou moins 1 Hz.
                    </p>
                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 4.webp" alt="Diapo 4" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Vérifions cela expérimentalement ainsi que la longueur d’onde. On place donc un émetteur alimenté par un GBF en sinusoïdal face à un récepteur. En reculant l’émetteur et relevant le nombre de déphasage on accède ainsi à la longueur d’onde. Puis en faisant varier la fréquence et en relevant le maximum de réception on obtient la fréquence d’émission précise.
                    </p>
                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 5.webp" alt="Diapo 5" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Ainsi on mesure 10 déphasages et on obtient lambda égal à 8,5 millimètres dont l’incertitude de type B est de 0,03 millimètre. Quand à la fréquence on relève 40,460 kHz ce qui reste dans la bande annoncée par le constructeur avec une incertitude de 10Hz. On vérifie ces mesures et calculant la célérité qui est ainsi de 344 m/s plus ou moins 3 m/s. On conservera ces valeurs pour la suite de l’étude.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 6.webp" alt="Diapo 6" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">3. Etude de l'affinement du faisceau</h3>
                    <h4 className="text-2xl font-semibold mb-4 text-gray-800 mb-6">3.1 Aspect Théorique</h4>
                    <p className="text-gray-700 text-justify mb-10">
                    Déterminons le spectre d’émission d’un transducteur ultrasonore rond. Pour cela on isole un élément de surface dS et on calcule le signal reçu en un point M de l’espace. En faisant l’approximation que ce point M est situé à grande distance de l’émetteur ce qui se traduit par r et r’ très grands devant le rayon a, et grâce à la fonction de Bessel définie sur le diaporama on obtient un signal reçu au point M de la forme ci contre.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 7.webp" alt="Diapo 7" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Déterminons désormais ce qui se passe lorsque l’on place 2 émetteurs en  parallèle. Il faut ternir compte de l’influence des 2 émetteurs en tenant compte de leur déphasage phi=kd sin(th). Ainsi en passant par l’angle moitié et en se restreignant au module, l’amplitude devient désormais S(th) = […]. On vérifie rapidement que pour theta = 0, l’amplitude est deux fois supérieure à celle d’un seul émetteur.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 8.webp" alt="Diapo 8" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Modélisons ainsi ces calculs sur python et écrivons un programme permettant de visualiser l’influence de la mise en parallèle d’émetteurs. On trace ainsi 3 courbes en coordonnées polaires pour 1, 3 et 7 émetteurs. On observe un affinement du lobe ce qui est le résultats souhaité.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 9.webp" alt="Diapo 9" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <h4 className="text-2xl font-semibold mb-4 text-gray-800 mb-6">3.2 Vérification Expérimentale</h4>
                    <p className="text-gray-700 text-justify mb-10">
                    Vérifions ainsi expérimentalement ce phénomène. On place dans un premier cas 1 seul émetteur et dans un second cas 2 cote à cote. On déplace un récepteur à distance constante et on relève les différentes valeurs de l’amplitude en fonction de l’angle theta. On va ainsi tracer le lobe d’émission correspondant.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 10.webp" alt="Diapo 10" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Voici le montage ou j’ai placé les émetteurs et récepteurs en hauteur pour éviter la réflexion sur la table et améliorer ainsi la précision de nos mesures. On représente ici quelques valeurs seulement sur toutes celle prises lors de l’expérience, et traçons sur python.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 11.webp" alt="Diapo 11" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    On trace ainsi l’amplitude sur l’amplitude maximale en fonction de sin(th). On observe effectivement un rétrécissement du faisceau, ce qui était désiré. L’écart observé pour des valeurs de faible amplitude peut s’expliquer par le seuil de résolution du récepteur.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 12.webp" alt="Diapo 12" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">4. Etude du contrôle de la Directivité</h3>
                    <h4 className="text-2xl font-semibold mb-4 text-gray-800 mb-6">4.1 Aspect Théorique</h4>
                    <p className="text-gray-700 text-justify mb-10">
                    Le deuxième aspect de cette étude porte sur l’orientation du faisceau. On va donc chercher à orienter le faisceau dans une direction donnée. Pour cela on va jouer sur le déphasage entre les différents émetteurs.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 13.webp" alt="Diapo 13" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 14.webp" alt="Diapo 14" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 15.webp" alt="Diapo 15" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 16.webp" alt="Diapo 16" className="rounded-lg shadow-md" />
                </div>

                <div className="mb-12">
                    <h4 className="text-2xl font-semibold mb-4 text-gray-800 mb-6">4.2 Vérification Expérimentale</h4>
                    <div className="flex justify-center mb-6">
                        <img src="/tipe2_pres/tipe2 17.webp" alt="Diapo 17" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 18.webp" alt="Diapo 18" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 19.webp" alt="Diapo 19" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 20.webp" alt="Diapo 20" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 21.webp" alt="Diapo 21" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 22.webp" alt="Diapo 22" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 23.webp" alt="Diapo 23" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 24.webp" alt="Diapo 24" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 25.webp" alt="Diapo 25" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 26.webp" alt="Diapo 26" className="rounded-lg shadow-md" />
                </div>

                <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">5. Conclusion </h3>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 27.webp" alt="Diapo 27" className="rounded-lg shadow-md" />
                </div>

                <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">6. Annexes </h3>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 29.webp" alt="Diapo 29" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 30.webp" alt="Diapo 30" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 31.webp" alt="Diapo 31" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 32.webp" alt="Diapo 32" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 33.webp" alt="Diapo 33" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 34.webp" alt="Diapo 34" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 35.webp" alt="Diapo 35" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe2_pres/tipe2 36.webp" alt="Diapo 36" className="rounded-lg shadow-md" />
                </div>

                <p className="text-black font-bold text-2xl mt-10 text-justify flex items-center justify-center">
                    <span className="mr-2 text-2xl">⭐</span> Fin.
                </p>

            </div>    
        </MathJaxContext>
    );
};

export default ProjetTIPE2;
