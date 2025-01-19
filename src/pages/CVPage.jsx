import React from 'react';
import { FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const CVPage = () => {
    return (
        <div className="py-12 px-8 max-w-4xl mx-auto bg-white">
            {/* Bouton de téléchargement du CV */}
            <div className="text-right mb-8">
                <a
                    href="/CV_MLG.pdf"
                    download
                    className="inline-flex items-center text-white bg-red-700 font-medium py-2 px-6 rounded hover:bg-red-900 transition-colors"
                >
                    <FaDownload className="mr-2" />
                    Download CV
                </a>
            </div>

            {/* En-tête */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 text-center">Maël Le Guillouzic</h1>
                <p className="text-lg text-gray-600 mt-2 text-center">
                    Ambitious Master's student in AI, Applied Mathematics, and Computer Engineering.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    <FaEnvelope className="inline mr-2" />
                    <a href="mailto:mael.leguillouzic@telecom-paris.fr" className="hover:underline">mael.leguillouzic@telecom-paris.fr</a>
                </p>
                <p className="text-sm text-gray-500">
                    <FaPhone className="inline mr-2" />
                    <a href="tel:+33783893979" className="hover:underline">+33 7 83 89 39 79</a>
                </p>
            </div>

            {/* Section Professional Summary */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Professional Summary</h2>
                <p className="text-gray-700 text-justify mt-4">
                    Ambitious Master's student in AI, Applied Mathematics, and Computer Engineering at a top French engineering school.
                    Experienced in machine learning, image processing, and deep learning, with a strong foundation in mathematics and
                    programming. Seeking challenging opportunities in AI and data science to leverage my technical skills.
                </p>
            </section>

            {/* Section Education */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Education</h2>
                
                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Télécom Paris | Institut Polytechnique de Paris</h3>
                        <p className="text-sm text-gray-500 italic">September 2022 - Present</p>
                    </div>
                    <ul className="list-disc pl-6 list-outside text-gray-700 mt-2 text-left">
                        <li className="text-justify pl-2">Master's in AI, Applied Mathematics, and Computer Engineering.</li>
                        <li className="text-justify pl-2">Coursework: Data Science, Image Processing, Deep Learning, Language Theory, Signal Processing, Probability, Statistics</li>
                        <li className="text-justify pl-2">Notable Project: Developed a Deepfake detection system using ResNet 18.</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Preparatory Classes for Engineering Schools</h3>
                        <p className="text-sm text-gray-500 italic">September 2019 - June 2022</p>
                    </div>
                    <ul className="list-disc pl-6 list-outside text-gray-700 mt-2 text-left">
                        <li className="text-justify pl-2">Intensive program preparing for highly competitive entrance exams to top French engineering schools.</li>
                        <li className="text-justify pl-2">Focused on Advanced Mathematics,Physics, and Engineering Sciences.</li>
                        <li className="text-justify pl-2">Achievement: Admitted to Télécom Paris, Ponts ParisTech, and ENS Paris Saclay among to 5 students.</li>
                    </ul>
                </div>
            </section>

            {/* Section Leadership Experience */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Leadership Experience</h2>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">President, Télécom Paris Student Union</h3>
                        <p className="text-sm text-gray-500 italic">April 2023 - May 2024 (1 year)</p>
                    </div>
                    <ul className="list-disc pl-6 list-outside text-gray-700 mt-2 text-left">
                        <li className="text-justify pl-2">Led a team of 26 to manage all aspects of student life for 1,600 students</li>
                        <li className="text-justify pl-2">Oversaw an annual budget of €400,000 and organized major campus events</li>
                        <li className="text-justify pl-2">Implemented initiatives to prevent alcohol-related risks, harassment, and sexual violence</li>
                        <li className="text-justify pl-2">Served as the primary liaison between the student body and school administration</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Treasurer, Télécom Voile (Sailing Club)</h3>
                        <p className="text-sm text-gray-500 italic">June 2023 - September 2024 (1 year)</p>
                    </div>
                    <ul className="list-disc pl-6 list-outside text-gray-700 mt-2 text-left">
                        <li className="text-justify pl-2">Managed an annual budget of €7,000 for the school's sailing association</li>
                        <li className="text-justify pl-2">Leveraged 3 years of sailing instruction experience to enhance club activities</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Professional Experience</h2>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Engineering Intern | Halter AG | Geneva, Switzerland</h3>
                        <p className="text-sm text-gray-500 italic">Summer 2023 (1 Months)</p>
                    </div>
                    <ul className="list-disc list-ouside pl-6 text-gray-700 mt-2 text-left">
                        <li className="text-justify pl-2">Contributed to a €200 million real estate project (Pont Rouge B2) as part of an 8-person engineering team</li>
                        <li className="text-justify pl-2">Coordinated interventions between multiple stakeholders and managed on-site operations</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">IT Intern | Thalès Services</h3>
                        <p className="text-sm text-gray-500 italic">June 2017 (1 Month)</p>
                    </div>
                    <ul className="list-disc list-outside pl-6 text-gray-700 mt-2 text-left">
                        <li className="text-justify pl-2">Assisted in preparing virtual machines for technical teams. Gained exposure to corporate IT infrastructure and services</li>
                    </ul>
                </div>
            </section>

            {/* Section Technical Skills */}
            <section>
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300 mb-4">Other Informations</h2>
                <p className="text-gray-700 text-justify mb-2">
                    <strong>Programming:</strong> Python, C++, React, TypeScript, JavaScript, HTML, CSS, SQL, LaTeX, Git.
                </p>
                <p className="text-gray-700 text-justify mb-2">
                    <strong>Areas of Expertise:</strong> Computer Vison, Mathematics, Deep Learning, Machine Learning, Image Processing, Signal Processing, Data Science, Data Visualisation, Management, Leadership.
                </p>
                <p className="text-gray-700 text-justify mb-2">
                    <strong>Languages:</strong> French (Native), English (Professional working proficiency), German (Elementary proficiency)
                </p>
                <p className="text-gray-700 text-justify mb-2">
                    <strong>Interests:</strong> Geopolitics (actively follow international relations and policy developments), Competitive sports (participate in sailing competitions and various team sports), Hackathons (participate in coding competitions and hackathons), Chess (play regularly and follow international tournaments), Reading (enjoy reading books on history, science, and technology).
                </p>
            </section>
        </div>
    );
};

export default CVPage;