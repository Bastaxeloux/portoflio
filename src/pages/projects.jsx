import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Style de base pour les onglets

// Données des projets
const technicalProjects = [
    {
        id: 'tech-1',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    },
    {
        id: 'tech-2',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    },
    {
        id: 'tech-3',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    },
    {
        id: 'tech-4',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    },
    {
        id: 'tech-5',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    },
    {
        id: 'tech-6',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    },
    {
        id: 'tech-7',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    },
    {
        id: 'tech-8',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    },
    {
        id: 'tech-9',
        title: 'Coming Soon',
        description: 'Coming soon coming soon coming soon',
        image: '/api/placeholder/400/300',
        details: 'description détaillée'
    }
];

const otherProjects = [
    {
        id: 'other-1',
        title: 'Projet Associatif',
        description: 'Organisation d\'événements caritatifs dans le but de collecter des fonds',
        image: '/api/placeholder/400/300',
        details: 'Description détaillée du projet 1...'
    },
    {
        id: 'other-2',
        title: 'Projet Associatif',
        description: 'Organisation d\'événements caritatifs dans le but de collecter des fonds',
        image: '/api/placeholder/400/300',
        details: 'Description détaillée du projet 1...'
    },
    {
        id: 'other-3',
        title: 'Projet Associatif',
        description: 'Organisation d\'événements caritatifs dans le but de collecter des fonds',
        image: '/api/placeholder/400/300',
        details: 'Description détaillée du projet 1...'
    }
];

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

// Page principale des projets avec deux onglets
const ProjectsPage = () => {
    return (
        <div className="py-8">
            <Tabs>
                {/* Liste des Onglets */}
                <TabList className="flex mb-4 border-b border-gray-300">
                    <Tab className="cursor-pointer px-4 py-2 mr-2 text-gray-700 hover:text-black focus:outline-none" selectedClassName="border-b-2 border-black font-semibold">
                        Technical projects
                    </Tab>
                    <Tab className="cursor-pointer px-4 py-2 mr-2 text-gray-700 hover:text-black focus:outline-none" selectedClassName="border-b-2 border-black font-semibold">
                        Other projects
                    </Tab>
                </TabList>

                <TabPanel>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {technicalProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </section>
                </TabPanel>

                <TabPanel>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {otherProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </section>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProjectsPage;
