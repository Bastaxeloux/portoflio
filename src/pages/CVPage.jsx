import React from 'react';

const CVPage = () => {
    return (
        <div className="py-12 px-8 max-w-4xl mx-auto bg-white">
            {/* Bouton de téléchargement du CV */}
            <div className="text-right mb-8">
                <a
                    href="/CV_MLG.pdf" // Assurez-vous de placer le fichier cv_mael_lg.pdf dans le dossier public
                    download
                    className="inline-block text-gray-900 border border-gray-900 font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors"
                >
                    Download CV
                </a>
            </div>

            {/* En-tête du CV */}
            <div className="mb-12">
                <h1 className="text-5xl font-light text-gray-900">Maël Le Guillouzic</h1>
                <p className="text-xl text-gray-600 mt-4">
                    Ambitious student in AI, Applied Mathematics, and Computer Science Engineering at Télécom Paris.
                    Experienced in machine learning, image processing, and deep learning, with a strong foundation in mathematics and programming.
                </p>
                <p className="text-sm text-gray-500 mt-4">mael.leguillouzic@telecom-paris.fr </p>
            </div>

            {/* Section Education */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 pb-2 mb-4 border-b border-gray-300">Education</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Télécom Paris</h3>
                    <p className="text-sm text-gray-500">Paris, France | September 2022 - Present (Expected Graduation: 2026)</p>
                    <p className="text-gray-700">Master in AI, Applied Mathematics, and Computer Science Engineering</p>
                    <p className="text-sm text-gray-500 mt-1">Notable Project: Developed a Deepfake detection system using Convolutional Neural Networks (ResNet 18)</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Preparatory Classes for Engineering Schools (CPGE)</h3>
                    <p className="text-sm text-gray-500">Janson-de-Sailly, Paris | September 2019 - June 2022</p>
                    <p className="text-gray-700">Intensive program preparing for top engineering schools' competitive exams</p>
                </div>
            </section>

            {/* Section Leadership Experience */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 pb-2 mb-4 border-b border-gray-300">Leadership Experience</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">President, Télécom Paris Student Union</h3>
                    <p className="text-sm text-gray-500">Palaiseau, France | April 2023 - May 2024</p>
                    <ul className="list-disc pl-6 text-gray-700 mt-2">
                        <li>Managed a team of 26 to organize student life activities for 1,600 students</li>
                        <li>Oversaw an annual budget of €400,000 and organized major events</li>
                        <li>Implemented initiatives for alcohol and harassment risk prevention</li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Treasurer, Télécom Voile (Sailing Club)</h3>
                    <p className="text-sm text-gray-500">Perros-Guirec, France | June 2023 - September 2024</p>
                    <ul className="list-disc pl-6 text-gray-700 mt-2">
                        <li>Managed an annual budget of €7,000 for the sailing association</li>
                        <li>Enhanced club activities with 3 years of experience as a sailing instructor</li>
                    </ul>
                </div>
            </section>

            {/* Section Professional Experience */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 pb-2 mb-4 border-b border-gray-300">Professional Experience</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Engineering Intern, Halter AG</h3>
                    <p className="text-sm text-gray-500">Geneva, Switzerland | Summer 2023</p>
                    <p className="text-gray-700">Contributed to a €200 million real estate project (Pont Rouge B2) within an 8-member engineering team</p>
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">IT Intern, Thales Services</h3>
                    <p className="text-sm text-gray-500">Paris, France | June 2017</p>
                    <p className="text-gray-700">Assisted in the preparation of virtual machines for technical teams</p>
                </div>
            </section>

            {/* Section Additional Information */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 pb-2 mb-4 border-b border-gray-300">Additional Information</h2>
                <p className="text-gray-700">Languages: French (native), English (professional), German (basic knowledge)</p>
                <p className="text-gray-700 mt-2">Interests: Geopolitics, Sailing Competitions, Team Sports</p>
            </section>
        </div>
    );
};

export default CVPage;