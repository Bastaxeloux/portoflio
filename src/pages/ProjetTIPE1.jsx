import React, {useState} from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetTIPE1',
        title: 'Conception d\'un télescope à miroir liquide',
        description: 'Les miroirs de télescopes sont souvent en verre, mais pourquoi pas en liquide ?',
        details: 'Dans ce projet de physique pour les concours, j\'ai étudié la faisabilité d\'un miroir à surface liquide pour un télescope.',
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
            <div className="py-4 px-1 max-w-4xl mx-auto bg-white">
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
                    Abstract: {project.description} {project.details}
                </p>

                <div className="mb-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">Introduction</h3>
                    <p className="text-gray-700 text-justify mb-4">
                    Le projet se concentre sur les télescopes à miroir liquide, en explorant la théorie de fonctionnement de ces télescopes 
                    innovants et en construisant un modèle expérimental basé sur ce concept.
                    </p>
                    <p className="text-gray-700 text-justify mb-10">
                    Les télescopes à miroir liquide utilisent une fine couche de 
                    mercure (1 mm) en rotation pour créer un miroir primaire parabolique, reflétant la lumière de façon 
                    similaire aux miroirs en verre conventionnels.
                    <br />
                    <strong>Pour des raisons sanitaires, le mercure sera remplacé par de l'eau.</strong>
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 2.webp" alt="Diapo 2" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Dans l’atmosphère terrestre, une partie du spectre électromagnétique est absorbée, rendant certaines 
                    observations difficiles. De plus, les miroirs conventionnels sont coûteux et complexes à installer, 
                    ce qui motive l'exploration des miroirs liquides comme alternative.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 3.webp" alt="Diapo 3" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Un miroir liquide coûte environ 10 % d’un miroir conventionnel et est facilement transportable. Cependant, il ne peut être orienté que vers le zénith et nécessite l'utilisation de mercure, un élément toxique.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 4.webp" alt="Diapo 4" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Cette étude vise à modéliser un miroir liquide, à construire un prototype et à examiner les phénomènes 
                    limitant la qualité d’observation, comme les vibrations et la stabilité.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 5.webp" alt="Diapo 5" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">1. Aspect Théorique</h3>
                    <p className="text-gray-700 text-justify mb-10">
                    La forme parabolique du miroir résulte de la rotation uniforme du liquide, où la force centrifuge équilibre la gravité. La surface liquide adopte naturellement cette forme, idéale pour la concentration de la lumière.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 6.webp" alt="Diapo 6" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    En appliquant les principes de la dynamique, une équation parabolique est obtenue. 
                    La focale du miroir, dépendante de la vitesse angulaire et de l’accélération gravitationnelle, 
                    reste indépendante du liquide utilisé.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 7.webp" alt="Diapo 7" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    En simplifiant les forces et en intégrant, l'équation parabolique se révèle avec une focale 
                    proportionnelle à l’inverse de la vitesse angulaire au carré, indépendamment de la masse du liquide.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 8.webp" alt="Diapo 8" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Un montage Cassegrain n’est pas envisageable pour les miroirs liquides. 
                    Le projet se limite à un seul miroir primaire, orienté verticalement pour simplifier l’expérimentation.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 9.webp" alt="Diapo 9" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">2. Montage</h3>
                    <p className="text-gray-700 text-justify mb-10">
                    La structure est réalisée en aluminium pour sa légèreté et sa robustesse.
                    Des cornières assurent la rigidité par un assemblage à vis, apportant une stabilité 
                    nécessaire pour la rotation.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 10.webp" alt="Diapo 10" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Un moyeu de roue de vélo est utilisé pour stabiliser le miroir en rotation, 
                    simplifiant le montage tout en réduisant les vibrations verticales qui perturberaient 
                    la qualité d’image.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 11.webp" alt="Diapo 11" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Le décalage des filets entre l’axe et le connecteur a nécessité un ajustement de précision 
                    pour un alignement parfait, contribuant à une meilleure stabilité de la rotation.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 12.webp" alt="Diapo 12" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 13.webp" alt="Diapo 13" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Le récipient servant de miroir a un rayon de 5 cm, permettant de former une surface parabolique 
                    stable pour les tests optiques.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 14.webp" alt="Diapo 14" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Plusieurs moteurs ont été testés, avec un modèle de 6V à 294 tours par minute 
                    retenu pour sa capacité à maintenir une rotation régulière sans excès de vitesse.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 15.webp" alt="Diapo 15" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="mb-12">
                    <p className="text-gray-700 text-justify mb-10">
                    Des mesures du couple électromagnétique ont confirmé que ce moteur pouvait générer un 
                    couple suffisant pour maintenir la rotation du miroir sans déséquilibre.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 16.webp" alt="Diapo 16" className="rounded-lg shadow-md" />
                    </div>
                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 17.webp" alt="Diapo 17" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className = "mb-12" >
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">3. Expérimentation</h3>
                    <p className="text-gray-700 text-justify mb-10">
                        Mettons en rotation notre dispositif et observons la surface du liquide.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 18.webp" alt="Diapo 18" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className = "mb-12" >
                <p className="text-gray-700 text-justify mb-10">
                    En utilisant Python et la fonction polyfit de Numpy, une courbe parabolique a été ajustée, 
                    révélant un coefficient de détermination proche de 1, confirmant la cohérence du modèle.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 19.webp" alt="Diapo 19" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className = "mb-12" >
                    <p className="text-gray-700 text-justify mb-10">
                        Néanmoins, notre montage est sujet à des vibrations et un centrage imparfait du récipient, 
                        perturbant la qualité de la surface parabolique et limitant les capacités d'observation.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img src="/tipe1_pres/tipe1 20.webp" alt="Diapo 20" className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe1_pres/tipe1 21.webp" alt="Diapo 21" className="rounded-lg shadow-md" />
                </div>

                <div className="flex justify-center mb-12">
                    <img src="/tipe1_pres/tipe1 22.webp" alt="Diapo 22" className="rounded-lg shadow-md" />
                </div>

                
                <div className="mb-12 mt-8">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 mb-6">4.Annexes</h3>

                    <div className="flex justify-center mb-12">
                        <img src="/tipe1_pres/tipe1 24.webp" alt="Diapo 24" className="rounded-lg shadow-md" />
                    </div>

                    <div className="flex justify-center mb-12">
                        <img src="/tipe1_pres/tipe1 25.webp" alt="Diapo 25" className="rounded-lg shadow-md" />
                    </div>

                    <div className="flex justify-center mb-12">
                        <img src="/tipe1_pres/tipe1 26.webp" alt="Diapo 26" className="rounded-lg shadow-md" />
                    </div>

                    <div className="flex justify-center mb-12">
                        <img src="/tipe1_pres/tipe1 27.webp" alt="Diapo 27" className="rounded-lg shadow-md" />
                    </div>

                    <div className="flex justify-center mb-12">
                        <img src="/tipe1_pres/tipe1 28.webp" alt="Diapo 28" className="rounded-lg shadow-md" />
                    </div>

                    <div className="flex justify-center mb-12">
                        <img src="/tipe1_pres/tipe1 29.webp" alt="Diapo 29" className="rounded-lg shadow-md" />
                    </div>

                    <div className="flex justify-center mb-12">
                        <img src="/tipe1_pres/tipe1 30.webp" alt="Diapo 30" className="rounded-lg shadow-md" />
                    </div>
                </div>




                <p className="text-black font-bold text-2xl mt-10 text-justify flex items-center justify-center">
                    <span className="mr-2 text-2xl">⭐</span> Fin.
                </p>

            </div>    
        </MathJaxContext>
    );
};

export default ProjetTIPE1;