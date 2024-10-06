import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Example project details (replace with your actual project details)
const projectsData = [
    {
        id: 'tech-1',
        title: 'Deep Learning Model for Image Recognition',
        description: 'A comprehensive project utilizing convolutional neural networks to classify images.',
        technologies: ['Python', 'TensorFlow', 'Keras'],
        details: 'This project was focused on building a deep learning model to classify images from the CIFAR-10 dataset. The model achieved an accuracy of 85% on the test set. Techniques like data augmentation and model tuning were used to improve the accuracy.',
        images: ['/images/project1-img1.jpg', '/images/project1-img2.jpg']
    },
    {
        id: 'tech-2',
        title: 'React Web Application for Portfolio',
        description: 'A portfolio website developed using React and Tailwind CSS.',
        technologies: ['JavaScript', 'React', 'Tailwind CSS'],
        details: 'The goal of this project was to build a personal portfolio website to showcase my projects and experience. The website is fully responsive, built with React and styled with Tailwind CSS.',
        images: ['/images/project2-img1.jpg']
    }
];

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="py-12 px-8 max-w-4xl mx-auto bg-white">
            <div className="flex justify-start mb-8">
                <Link
                    to="/projets"
                    className="inline-block bg-black text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors"
                >
                    ← Back to Projects
                </Link>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">{project.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{project.description}</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Technologies Used</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Details</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{project.details}</p>
            {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {project.images.map((image, index) => (
                        <img key={index} src={image} alt={`${project.title} image ${index + 1}`} className="rounded-lg shadow-md" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;