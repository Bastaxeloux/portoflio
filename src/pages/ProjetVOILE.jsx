import React from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetVOILE',
        title: 'La Voile : Une Passion au Long Cours',
        description: 'Retour sur mon parcours en voile, de mes débuts en Bretagne à mes responsabilités en école.',
    }
];

const ProjetVOILE = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    const config = {
        loader: { load: ['input/asciimath', 'output/chtml'] },
    };

    if (!project) {
        return <div> Project not found... Id = {id}</div>;
    }

    return (
        <MathJaxContext config={config}>
            <div className="py-4 px-1 max-w-4xl mx-auto bg-white">
                <div className="flex justify-start mb-8">
                    <Link to="/projets" className="inline-block bg-black text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors">
                        ← Back to Projects
                    </Link>
                </div>

                <h1 className="text-4xl font-bold mt-6 mb-8 text-gray-900 justify-center">{project.title}</h1>
                
                <section className="mb-8 text-left">
                    <p className="text-gray-700 leading-relaxed">
                        <em>Quand on grandit avec la mer pour horizon, elle devient vite une seconde maison.</em> <br /> Depuis tout petit, mes étés en Bretagne ont été rythmés par les marées, 
                        les balades sur les côtes sauvages, et mes premières navigations sur des bateaux à voile. Ce lien fort avec la mer continue de m'accompagner aujourd'hui au travers de nombreuses activités autour de ce sport qui m'est cher. 
                    </p>
                </section>

                <div className="flex justify-center gap-2 mb-8">
                    <img src="/voile/sailing_6.webp" alt="Bateau" className="rounded-lg shadow-md w-2/5" />
                    <img src="/voile/sailing_7.webp" alt="Bateau" className="rounded-lg shadow-md w-2/5" />
                </div>

                <section className="p-6 bg-white border rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        Les étapes marquantes
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                        On m’a mis les pieds sur un bateau très jeune. Ces dernières années, cette passion m’a permis de :
                    </p>
                    <ul className="list-none pl-6 mt-4 space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">➔</span>
                            <p className='text-left'><strong>Transmettre :</strong> en devenant Aide Moniteur pendant 3 ans, j’ai pu accompagner les plus jeunes dans leur apprentissage. </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">➔</span>
                            <p className='text-left'><strong>Gérer une association :</strong> en tant que Trésorier de l’association de voile de mon école, avec une année pleine de projets.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">➔</span>
                            <p className='text-left'><strong>Prendre des responsabilités :</strong> skipper d’un bateau de 8 personnes durant une croisière associative, une expérience aussi exigeante qu’enrichissante.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">➔</span>
                            <p className='text-left'><strong>Me perfectionner :</strong> passer le niveau 4 technique, prérequis pour enseigner la voile en France.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">➔</span>
                            <p className='text-left'><strong>Me dépasser :</strong> pratiquer la voile légère à un niveau intensif, deux mois par an.</p>
                        </li>
                    </ul>
                </section>

                <section className="mb-8 text-left">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Mes débuts en Bretagne</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Tout débute en Bretagne, 2 mois par an, sur les terres d’origine de mon grand père. Originaire d’un petit village agricole des Côtes d’Armor, 
                        la partie nord de la Bretagne, il m’a très tôt habitué à côtoyer la mer. Cette dernière était présente tous les jours, que ce soit sous la forme de balade 
                        le long de la côte, de pêche sur les plages à marée basse, ou quand j’en ai eu l'âge : d’activités nautiques. C’est ainsi que, malgré qu’il n’ait jamais 
                        navigué de sa vie, il m’a inscrit au centre nautique de la plage, et tous les jours m’emmenait pour aller naviguer puis revenir me chercher quelques heures plus tard, 
                        tout trempé et frigorifié, mais heureux de ces quelques heures dans un environnement aussi naturel et sauvage que la Bretagne Nord.
                    </p>
                </section>

                <section className="mb-8 text-left">
                    <p className="text-gray-700 leading-relaxed">
                        Chaque année, le rituel restait donc le même et les supports évoluaient. Optimist, New Cat 12, Topaz 14, Dart 16, RS Cat 16, Hobbie Cat 17, Laser, 
                        Rs Quest, Vago, planche à voile, surf. Chaque nouveau support me donnait l’occasion d’observer la discipline sous un nouvel angle et de réapprendre une technique 
                        différente, souvent challengeante pour arriver à un niveau d’autonomie.
                    </p>
                </section>

                <hr className="my-8 border-t border-gray-300" />

                <section className="mb-8 text-left">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Transmettre la passion</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Ce lien avec la mer s’est renforcé à l’adolescence, lorsque j’ai eu l’opportunité de transmettre cette passion. À mes 14 ans, on m’a proposé de devenir Aide Moniteur. 
                        Entièrement bénévole, j’étais tous les jours en binôme avec un moniteur agréé, en charge de le seconder dans l’apprentissage, d’aider les bateaux de jeunes en difficulté. 
                        Le plus souvent sur le même bateau sécurité que lui, il était possible de prendre un bateau à voile pour être au plus près des autres élèves, leur montrer les techniques 
                        en naviguant avec eux.
                    </p>
                </section>

                
                <section className="mb-8 text-left">
                    <p className="text-gray-700 leading-relaxed">
                        De ces 3 années riches en apprentissage, je garde un souvenirs particuliers. Ce fut ma première semaine avec le groupe “jardin des mers”; destiné aux tout petits, 
                        il s’agit d’un cours qui vise à leur faire découvrir la mer sous tous les angles, avec de nombreuses activités variées. Ainsi nous pouvions les emmener naviguer avec nous 
                        sur le vieux gréement du centre, les emmener en bateau sur les îles en face, pour y observer la faune et la flore, pratiquer la pêche, aller remonter des casiers … 
                        C’était une semaine si spéciale et avoir la chance de leur faire découvrir toutes ces activités devant leurs yeux émerveillés restera un souvenir impérissable.
                    </p>
                </section>

                <hr className="my-8 border-t border-gray-300" />

                <section className="mb-8 text-left">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Progresser et prendre des responsabilités</h2>
                    <p className="text-gray-700 leading-relaxed">
                        A l’issue de ces années de pratique, il fallu passer le monitorat; j’ai donc débuté les prérequis pour devenir moniteur, passé mon niveau 4 qui est le niveau technique 
                        requis pour enseigner en France ainsi que mon permis bateau. Malheureusement, l’entrée en classes préparatoires aux grandes écoles, ne m’a pas permis de venir à bout 
                        des formations pour le monitorat, qui restent longues et prenantes.
                    </p>
                </section>

                <section className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm mb-10">
                    <p className="text-gray-700 leading-relaxed mb-6 text-left">
                        C’est ainsi qu’en école, j’ai intégré l’association de voile pour en devenir le trésorier. Lorsque nous reprenons le projet avec 3 amis, le mandat précédent était 
                        constitué de ... 2 personnes. Nous avons alors bataillé pour réussir à organiser deux évènements d’ampleur :
                    </p>
                    <ul className="list-none pl-6 space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">⛵</span>
                            <p className="text-gray-700 text-left">
                                Un week-end pour faire découvrir la voile légère à ceux n’en ayant jamais fait et à prix réduit, une première dans l'histoire de l'association.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">🌊</span>
                            <p className="text-gray-700 text-left">
                                Une croisière d’une semaine pour faire découvrir l’habitable, en augmentant de 50% le nombre de personnes présentes.
                            </p>
                        </li>
                    </ul>
                </section>

                <p className="text-gray-700 text-left leading-relaxed mt-4">
                    A l'issue de cette année riche, nous avons alors pu passer le flambeau à un nouveau mandat encore plus grand, porteur de nouveaux projets. Le bilan financier de l'association 
                    présente un chiffre d'affaires de 8000 euros sur l'exercice, en positif de 500 euros destinés à renforcer le matelas épuisé par plusieurs années d'inactivité.
                </p>
                

                <hr className="my-8 border-t border-gray-300" />

                <section className="mb-8 text-left">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed">
                        La voile a toujours été une part essentielle de ma vie. C'est plus qu'un sport, c'est une façon de me reconnecter à mes origines, de partager des moments uniques avec les autres, 
                        et de me dépasser face à la nature. Cet article est peut-être plus personnel que le reste de mon portfolio, mais il me tenait à coeur. Si j'ai pris le temps de l'écrire, c'est parce 
                        que ces souvenirs et ces expériences m'ont façonné, et je ne pouvais pas imaginer parler de la voile autrement.
                    </p>
                </section>

                <p className="text-xl text-center font-semibold text-blue-600 mt-4 mb-8">
                    "If you surrender to the wind, you can ride it."
                </p>

                <hr className="my-8 border-t border-gray-300" />

                <div className="flex justify-center gap-2 mb-8">
                    <img src="/voile/sailing_1.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                    <img src="/voile/sailing_3.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                </div>

                <div className="flex justify-center gap-2 mb-8">
                    <img src="/voile/sailing_5.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                    <img src="/voile/sailing_8.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                </div>

                <div className="flex justify-center gap-2 mb-8">
                    <img src="/voile/sailing_11.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                    <img src="/voile/sailing_13.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                </div>

                <div className="flex justify-center gap-2 mb-8">
                    <img src="/voile/sailing_9.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                    <img src="/voile/sailing_10.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                </div>

                <div className="flex justify-center gap-2 mb-8">
                    <img src="/voile/sailing_14.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                    <img src="/voile/sailing_12.webp" alt="Bateau" className="rounded-lg shadow-md w-1/2" />
                </div>


            </div>
        </MathJaxContext>
    );
};

export default ProjetVOILE;