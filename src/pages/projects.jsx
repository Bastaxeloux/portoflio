import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Style de base pour les onglets

// Données des projets
const technicalProjects = [
    {
        id: 'ProjetJPEG',
        title: 'Falsification JPEG',
        description: 'Implémentation d\'un papier de recherche sur la détection de falsification d\'images JPEG',
        image: '/couv_jpeg.webp',
        details: 'description détaillée',
        order: 2
    },
    {
        id: 'ProjetTIPE2',
        title: 'Réseaux Phasés',
        description: 'Etude théorique des réseaux phasés (antenne à balayage de phase) et conception physique d\'une maquette fonctionnelle.',
        image: '/couv_tipe2.webp',
        details: '',
        order: 4
    },
    {
        id: 'ProjetPACT',
        title: 'Manchette Vibrante pour Sourds et Malentendants (MVSM)',
        description: 'Elaboration d\'un prototype de manchette vibrante pour recréer l\'environnement sonore au travers du toucher',
        image: '/couv_pact.webp',
        details: '',
        order: 5
    },
    {
        id: 'ProjetTIPE1',
        title: 'Mirroir à surface Liquide',
        description: 'Réalisation physique d\'un miroir à surface liquide',
        image: '/couv_tipe1.webp',
        details: 'description détaillée',
        order: 6
    },
    {
        id: 'Projet3DT',
        title: 'Segmentation d\'images 3D+T',
        description: 'Implémentation d\'un papier de recherche sur la segmentation d\'images cardiaques en 3D, plus une composante temporelle',
        image: '/couv_3DT.webp',
        details: 'Implémentation d\'un papier de recherche sur la segmentation d\'images cardiaques en 3D, plus une composante temporelle',
        order: 1
    },
    {
        id: 'tech-6',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/loading.webp',
        details: 'description détaillée',
        order: 9
    },
    {
        id: 'tech-7',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/loading.webp',
        details: 'description détaillée',
        order: 10
    },
    {
        id: 'tech-9',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/loading.webp',
        details: 'description détaillée',
        order: 11
    }
];

const otherProjects = [
    {
        id: 'ProjetPACE',
        title: 'PACE : Projet D\'écriture',
        description: 'Ecriture d\'un ouvrage sur le symbolisme phonétique',
        image: '/couv_pace.webp',
        details: 'Description détaillée du projet 1...',
        order: 3
    },
    {
        id: 'Data Panel',
        title: 'Animation d\'une table ronde sur les métiers de la Data',
        description: 'Organisateur et animateur  d\'une table ronde sur les métiers de la Data à Télécom Paris devant 220 étudiants',
        image: '/couv_data_panel.webp',
        details: 'Description détaillée du projet 1...',
        order: 7
    },
    {
        id: 'other-3',
        title: 'Projet Associatif',
        description: 'Organisation d\'événements caritatifs dans le but de collecter des fonds',
        image: '/loading.webp',
        details: 'Description détaillée du projet 1...',
        order: 12
    }
];

{/* Création d'une table commune qui regroupe les projets techniques et non techniques*/}
const allProjects = [...technicalProjects, ...otherProjects].sort((a, b) => a.order - b.order);


const ProjectCard = ({ project }) => (
    <Link to={`/projets/${project.id}`} className="block">
        <div className="group transition-all duration-300 cursor-pointer h-full flex flex-col w-full max-w-[22rem] mx-auto">
            {/* Image du projet */}
            <div className="overflow-hidden rounded-lg border-2 border-gray-200 mb-3">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Contenu du projet */}
            <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-medium mb-1 text-gray-900">
                    {project.title}
                </h3>
                <p className="text-sm italic text-gray-600 flex-grow overflow-hidden">
                    {project.description}
                </p>
            </div>
        </div>
    </Link>
);



const ProjectsPage = () => {
    return (
        <div className="py-8">
            {/* Titre centré */}
            <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>

            <p className="text-justify text-gray-700 italic max-w-2xl mx-auto mb-6">
                All the projects on this page have been carried out by myself, alone or in a group.<br/>
                <strong>All the text is written by me.</strong> <br/>
                As the website is in construction, the projects are in French for the moment. They will be soon translated into English.
            </p>

            <Tabs>
                <TabList className="flex mb-6 mt-8 border-b border-gray-300 justify-center">
                    <Tab
                        className="cursor-pointer px-4 py-2 mr-4 text-gray-700 hover:text-black focus:outline-none transition-all duration-300 transform hover:scale-105" 
                        selectedClassName="border-b-4 border-black font-semibold"
                    >
                        All projects
                    </Tab>
                    <Tab
                        className="cursor-pointer px-4 py-2 mr-4 text-gray-700 hover:text-black focus:outline-none transition-all duration-300 transform hover:scale-105" 
                        selectedClassName="border-b-4 border-black font-semibold"
                    >
                        Scientific projects
                    </Tab>
                    <Tab
                        className="cursor-pointer px-4 py-2 mr-4 text-gray-700 hover:text-black focus:outline-none transition-all duration-300 transform hover:scale-105" 
                        selectedClassName="border-b-4 border-black font-semibold"
                    >
                        Other projects
                    </Tab>
                </TabList>

                {/* Contenu des onglets */}
                <TabPanel>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {allProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {technicalProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {otherProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </section>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProjectsPage;


