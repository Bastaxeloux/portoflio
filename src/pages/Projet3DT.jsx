import React, {useState} from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'Projet3DT',
        title: 'Segmentation d\'images cardiaques 4D MRI, sans deep learning',
        description: 'Segmentation du ventricule gauche à partir d\'images 3D+T dans le cadre des maladies cardiovasculaires.',
        details: 'Dans ce projet de deuxième année d\'ingénieur, nous avons segmenté le ventricule gauche d\'images MRI 4D à l\'aide de méthodes "classiques" non supervisées',
        pdf1 : "/3dt_article1.pdf",
        pdf2 : "/3dt_article2.pdf",
        github : "https://github.com/Bastaxeloux/proj3dt",
        rapport : "/3dt_rapport.pdf",
    }
];

const FunctionDetail = ({ functionName, functionDescription, functionCode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
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

            {/* Explication affichée */}
            <div className="border-l-4 border-gray-300 pl-4 ml-2">
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                    {functionDescription}
                </p>
            </div>

            {/* Affichage conditionnel du code */}
            {isOpen && (
                <div className="mt-4">
                    <pre className="bg-gray-900 text-white p-4 rounded-lg shadow-md whitespace-pre-wrap text-left">
                        {functionCode}
                    </pre>
                </div>
            )}
        </div>
    );
};


const Projet3DT = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    const config = {
        loader: { load: ['input/asciimath', 'output/chtml'] },
    };

    return (
        <MathJaxContext config={config}>
            <div className="py-4 px-4 max-w-4xl mx-auto bg-white">
                <div className="flex justify-start mb-8">
                    <Link
                        to="/projets"
                        className="inline-block bg-black text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors"
                    >
                        ← Back to Projects
                    </Link>
                </div>

                {/* Titre */}
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Segmentation d'images cardiaques 3D+T</h1>
                <p className="text-lg italic text-gray-700 mb-2 text-center">Implémentation d’un papier de recherche</p>
                <p className="text-base text-gray-700 text-center mb-6">
                    Réalisé en binôme avec <a href="https://github.com/mdb0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Martin De Bats</a><br />
                    Sous la supervision de <a href="https://scholar.google.co.uk/citations?user=_7MXR2MAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Loïc Le Folgoc</a>
                </p>

                {/* Abstract */}
                <p className="text-lg italic text-gray-600 mb-6 text-justify">
                    Abstract : Ce projet explore la segmentation du ventricule gauche à partir d'images 3D+T dans le cadre des maladies cardiovasculaires. 
                    Nous utilisons des approches basées sur la croissance de région pour extraire cette structure critique à partir d'images IRM en 3D ainsi qu'une dimension temporelle (des vidéos 3D en quelque sorte).<br />
                </p>
                
                <div className="flex justify-center items-center my-3">
                    <video
                        src="/3dt/volume_video.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        preload="auto"
                        className="rounded-lg shadow-lg max-w-full"
                        width="500"
                        height="350"
                    >
                        Vidéo non supportée
                    </video>
                </div>
                <p className="text-gray-500 italic text-center mb-6">Résultat final de notre projet sur un patient !</p>

                <p className="text-lg italic text-gray-600 mb-6 text-justify">
                    Nous nous sommes appuyés sur deux papiers de recherche, que vous pouvez télécharger ci-dessous. Notre rapport pdf complet ainsi que le lien vers le dépôt GitHub sont également disponibles.
                </p>

                <div className="flex flex-col items-center gap-2 mb-8">
                    <a
                        href={project.pdf1}
                        download
                        className="text-blue-600 hover:underline flex items-center"
                    >
                        <span>📄 Article de recherche 1</span>
                    </a>
                    <a
                        href={project.pdf2}
                        download
                        className="text-blue-600 hover:underline flex items-center"
                    >
                        <span>📄 Article de recherche 2</span>
                    </a>
                    <a
                        href={project.rapport}
                        download
                        className="text-purple-600 hover:underline flex items-center"
                    >
                        <span>📁 Notre Rapport</span>
                    </a>
                    <a
                        href={project.github}
                        className="text-green-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>🔗 Voir sur GitHub </span>
                    </a>
                </div>

                {/* Introduction */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-left">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Selon l'Organisation Mondiale de la Santé (OMS), les maladies cardiovasculaires sont la <strong>principale</strong> cause de décès au niveau mondial. 
                    D’après les estimations, 17,9 millions de personnes sont mortes de maladies cardiovasculaires en 2019, soit <strong>32%</strong> de tous les décès dans le monde. 
                    La détection précoce de ces pathologies constitue donc un réel enjeu de santé publique, en particulier dans les pays en voie de développement qui disposent d'un accès très inégal à la santé.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Pour cela, les cliniciens ont besoin d'effectuer des segmentations des cavités cardiaques. Ainsi, ils peuvent accéder aux caractéristiques du muscle cardiaque comme, par exemple, son volume, sa masse, la fraction d’éjection…. Cependant, cette tâche est fastidieuse à effectuer à la main, d’où la nécessité de produire des outils de segmentation semi-automatique voire automatique.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    <strong>État de l'Art :</strong> Si aujourd'hui des approches basées sur des réseaux convolutifs (U-Net) et des Transformers dominent le sujet grâce à leur précision et leur robustesse, 
                    la segmentation d'imageries cardiaques existe depuis bien plus longtemps au travers de contours actifs et de croissance de région.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    <strong>Objet du projet :</strong> L'objet de notre projet est ainsi d'implémenter une méthode de segmentation par croissance de région pour segmenter le ventricule gauche. 
                    Pour l'intérêt scientifique de la chose, nous nous contentons d'utiliser des méthodes <i>"au pixel"</i>.
                </p>

                <div className="flex justify-center mb-6">
                    <img src="/3dt/causes-mortalites-dans-le-monde.webp" alt="Causes de mortalité dans le monde" className="rounded-lg shadow-md w-1/2" />
                </div>

                <h2 className="text-2xl font-semibold mt-8 text-gray-800 text-left">2. Dataset</h2>

                <h3 className="text-xl font-semibold mt-4 mb-4 text-gray-800 text-left">2.1 Le Jeu de données ACDC</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Pour notre projet, nous utilisons le jeu de données ACDC (Automatic Cardiac Diagnosis Challenge) élaboré en 2017 à l'Hôpital de Dijon dans le cadre d'un challenge de segmentation. 
                    Ce dernier offre un ensemble standardisé d'images 3D+T, ainsi que d'annotations utiles pour évaluer les performances de nos méthodes de segmentation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Le dataset est constitué de 150 patients, dont nous avons utilisé les 100 premiers pour l'élaboration de notre code ainsi que nos tests récurrents. 
                    Les 50 autres n'ont jamais été touchés jusqu'à l'évaluation finale de nos performances sur ces derniers. En effet, nous voulions à tout prix éviter des biais d'entraînement, 
                    et cette partie test joue le rôle d'un test grandeur nature avec un patient nouveau sur lequel nous n'avons aucune information qui arrive.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800 text-left">2.2 Contenu d'un patient</h3>
                <p className="text-gray-700 leading-relaxed mb-2 text-justify">
                    Pour chaque patient, on dispose :
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-6 text-justify">
                    <li>D'une image 4D, c'est-à-dire plusieurs images 3D selon un axe temporel.</li>
                    <li>D'une ground truth, qui est en quelque sorte la solution au problème de segmentation que nous cherchons à résoudre. Cette GT n'est disponible que pour les instants de diastole et systole.</li>
                </ul>

                <div className="flex justify-center mb-2">
                    <img src="/3dt/dataset.webp" alt="Présentation du Dataset" className="rounded-lg shadow-md w-4/5" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Données disponibles sur un patient</p>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Observons un patient. Pour cela, nous importons les bibliothèques nécessaires; nous utiliserons <code>torchio</code> pour visualiser nos images.
                </p>

                <FunctionDetail
                    functionName="load_patient"
                    functionDescription="Cette fonction charge les données d'un patient donné (numéro) et renvoie un objet contenant les images 4D et la ground truth. Elle permet également de gérer les patients en phase de test."
                    functionCode={`def load_patient(num, testing=False):\n    path = 'database/training'\n    if testing:\n        path = 'database/testing'\n        num += 100\n    with open(path + f'/patient{num:03}/info.cfg') as f:\n        info = [line.replace('\\n', '').replace(':', '').split(' ') for line in f]\n        for i in range(len(info))\n            if info[i][1].isnumeric():\n                info[i][1] = int(info[i][1])\n    patient = tio.Subject(\n        img=tio.ScalarImage(path + f'/patient{num:03}/patient{num:03}_4d.nii.gz'),\n        gt=tio.LabelMap(path + f'/patient{num:03}/patient{num:03}_frame{dict(info)[\"ED\"]:02}_gt.nii.gz'),\n        info=dict(info)\n    )\n    return patient`}
                />

                <div className="flex justify-center mb-2">
                    <img src="/3dt/patient_dataset.webp" alt="Contenu d'un patient du Dataset" className="rounded-lg shadow-md" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Coupe IRM d'un patient et sa ground truth</p>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    La région que nous cherchons à segmenter est ainsi la zone bleue, correspondant aux points de valeur 3 sur la ground truth.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    De plus, chaque patient possède des informations supplémentaires dans un fichier texte associé. Ces dernières nous seront utiles plus loin, 
                    et nous allons les convertir en un dictionnaire pour pouvoir les utiliser efficacement.
                </p>
                <div className="flex justify-center">
                    <table className="table-auto border-collapse border border-gray-300 w-3/5 text-sm mb-6">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Attribut</th>
                                <th className="border border-gray-300 px-4 py-2">Valeur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">ED</td>
                                <td className="border border-gray-300 px-4 py-2">1</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">ES</td>
                                <td className="border border-gray-300 px-4 py-2">12</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Group</td>
                                <td className="border border-gray-300 px-4 py-2">DCM</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Height</td>
                                <td className="border border-gray-300 px-4 py-2">160.0</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">NbFrame</td>
                                <td className="border border-gray-300 px-4 py-2">30</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Weight</td>
                                <td className="border border-gray-300 px-4 py-2">70</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* Placement des Seeds */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-left">3. Placement des Seeds</h2>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    <strong>La méthode par croissance de région nécessite un point de départ.</strong> En effet, la croissance de région repose sur 
                    <strong> l'expansion </strong> de la région segmentée de manière <strong> itérative </strong>. À chaque étape, les pixels au bord de 
                    la région regardent leurs voisins et évaluent si la différence d'intensité est inférieure à un seuil.
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-3 text-justify">
                    <li>Un seuil trop faible bloque l'expansion de la région.</li>
                    <li>Un seuil trop grand étend la région à l'ensemble de l'image, rendant la segmentation inutile.</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Ainsi, deux problématiques clés apparaissent :
                </p>

                <ol className="list-decimal pl-6 text-gray-700 mb-3 text-justify">
                    <li>Placer le point de départ dans le ventricule gauche.</li>
                    <li>Déterminer un seuil adapté à chaque image et patient.</li>
                </ol>

                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800 text-left">3.1 Méthode de Hough : Théorie</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    En observant les images IRM de patients, nous constatons que la région à segmenter est souvent de forme circulaire. 
                    Nous utilisons la transformée de Hough Circulaire pour détecter cette structure et placer la seed.
                </p>

                <h4 className="text-lg font-semibold mt-4 mb-3 text-gray-800 text-left">Paramètres</h4>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Un cercle est défini par trois paramètres : <i>a</i> et <i>b</i>, les coordonnées du centre, et <i>R</i>, le rayon. Son équation paramétrique est : 
                </p>

                <MathJax>
                    <p className="text-gray-700 text-center mb-3">
                        <i>x = a + R cos(θ), y = b + R sin(θ)</i>
                    </p>
                </MathJax>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    L'idée est de générer un cercle de rayon <i>R</i> pour chaque point de contour dans l'image et de voter dans une matrice dite d'accumulation. 
                    Les maxima de cette matrice correspondent aux centres les plus probables des cercles détectés.
                </p>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/hough_1.webp" alt="Méthode de Hough pour R fixé" className="rounded-lg shadow-md w-3/4" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Méthode de Hough pour R fixé</p>

                <h4 className="text-lg font-semibold mt-4 mb-3 text-gray-800 text-left">Cas des cercles de rayon inconnu</h4>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Pour des cercles de rayon inconnu, chaque point génère une surface conique dans l'espace des paramètres (<i>a</i>, <i>b</i>, <i>R</i>). 
                    Le maximum de la matrice d'accumulation fournit alors le triplet (<i>a</i>, <i>b</i>, <i>R</i>) correspondant au cercle le plus probable.
                </p>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/cone.webp" alt="Surface Conique pour Hough" className="rounded-lg shadow-md w-3/4" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Surface Conique parcourue pour Hough</p>

                <h4 className="text-lg font-semibold mt-4 mb-3 text-gray-800 text-left">Prétraitement des Images</h4>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Afin d'améliorer l'efficacité et réduire la complexité, les étapes suivantes sont souvent appliquées :
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-3 text-justify">
                    <li>Conversion en niveaux de gris.</li>
                    <li>Application du détecteur de contours de Canny.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">3.2 Hough Naïf : Pratique</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Dans un premier temps, nous utilisons une implémentation naïve de la méthode de Hough pour détecter les cercles dans une image du patient.
                    Voici l'extrait de code :
                </p>

                <FunctionDetail
                    functionName="hough_naive"
                    functionDescription="Utilise une implémentation naïve de Hough pour détecter des cercles dans une tranche centrale du patient."
                    functionCode={`hough_entry = np.array(t_img[Tps, :, :, Slice], dtype=np.uint8)
        circles = cv2.HoughCircles(hough_entry, cv2.HOUGH_GRADIENT, 
                                    1, 20, param1=80, param2=40, 
                                    minRadius=1, maxRadius=0)
        fig = plt.figure(figsize=(10, 7))
        plt.imshow(hough_entry, cmap='gray')
        if circles is not None:
            circles = np.uint16(np.around(circles))
            for i in circles[0, :]:
                cv2.circle(hough_entry, 
                        (i[0], i[1]), i[2], (255, 255, 255), 1)
                cv2.circle(hough_entry, 
                        (i[0], i[1]), 2, (255, 255, 255), 1)
        plt.imshow(hough_entry, cmap='gray')
        plt.title('Cercles détectés avec un Hough Naïf')
        plt.show()`}
                ></FunctionDetail>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/hough_naif.webp" alt="Cercles détectés avec un Hough Naïf" className="rounded-lg shadow-md w-3/4" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Cercles détectés avec un Hough Naïf</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Nous avons remarqué que les paramètres permissifs permettent de détecter trop de cercles. Il est donc nécessaire d’affiner les paramètres pour que la détection soit plus précise.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">3.3 Élaboration d'un Masque</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Afin de limiter la recherche de cercles, nous proposons d'élaborer un masque basé sur la fréquence cardiaque du patient. La transformée de Fourier 
                    est utilisée pour isoler la fréquence correspondante, et le masque est ensuite dilaté, érodé et flouté pour produire une zone d'intérêt centrée sur le cœur.
                </p>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/creationmask.webp" alt="Création d'un masque" className="rounded-lg shadow-md w-full" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Création d'un masque</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Nous allons appliquer ce masque sur l'image d'un patient et observer les résultats. Le masque permet d'assombrir les zones non pertinentes de l'image IRM, 
                    ne laissant que la région d'intérêt centrée sur le cœur. Observons le résultat de l'opération.
                </p>

                <FunctionDetail
                    functionName="tf_mask"
                    functionDescription="Applique une transformée de Fourier sur l'image IRM 4D pour créer un masque centré sur la fréquence cardiaque."
                    functionCode={`def tf_mask(image4d, Tps=Tps, Slice=Slice, heartrate=2):
        fft_img = torch.fft.fft(image4d, axis=0)
        filtred = fft_img
        heartrate_i = int(heartrate)
        heartrate_f = heartrate - heartrate_i
        filtred[:heartrate_i, :, :, :] = 0.0
        filtred[heartrate_i+1:, :, :, :] = 0.0
        filtred[heartrate_i] *= (1-heartrate_f)
        filtred[heartrate_i+1] *= heartrate_f
        timg2 = torch.abs(torch.fft.fft(filtred, axis=0))
        mask = np.array(timg2[Tps, :, :, Slice])
        mask = np.uint8(2*mask/np.max(mask)*255)
        mask = cv2.dilate(mask, 
                        cv2.getStructuringElement(
                            cv2.MORPH_ELLIPSE, 
                            (110,110)), 1)
        mask = cv2.erode(mask, 
                        cv2.getStructuringElement(
                            cv2.MORPH_ELLIPSE, 
                            (130,130)), 1)
        mask = cv2.blur(mask, (21, 21))
        img_m = np.array(image4d[Tps, :, :, Slice], 
                        dtype=np.float64)
        img_m = np.uint8(img_m/np.max(img_m)*np.float64(mask))
        img_m = cv2.medianBlur(img_m, 5)
        return img_m, mask`}
                ></FunctionDetail>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/patient_masque.webp" alt="Aperçu du masque pour le patient" className="rounded-lg shadow-md w-9/5" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Aperçu du masque pour le patient n°2</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Maintenant que nous avons le masque, nous pouvons l’utiliser pour limiter la recherche de cercles à une zone précise. Avant cela, 
                    nous allons définir une fonction pour afficher facilement les cercles détectés.
                </p>

                <FunctionDetail
                    functionName="draw_cercles"
                    functionDescription="Affiche une tranche d'image avec les cercles détectés à l'aide de la méthode Hough."
                    functionCode={`def draw_cercles(image4d, circles=None, Tps=Tps, Slice=Slice):
    # Convertir l'image en RGB pour dessiner des cercles en couleur
    gray = np.array(image4d[Tps, :, :, Slice], dtype=np.uint8)
    img_rgb = cv2.cvtColor(gray, cv2.COLOR_GRAY2RGB)
    if circles is not None:
        circles = np.uint16(np.around(circles))
        for i in circles[0, :]:
            # Cercle extérieur
            cv2.circle(img_rgb, (i[0], i[1]), i[2], (255, 0, 0), 2)
            # Centre du cercle
            cv2.circle(img_rgb, (i[0], i[1]), 2, (0, 255, 0), 3)
    return img_rgb`}
                ></FunctionDetail>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">3.4 La motivation derrière le choix de Best Hough</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Pour déterminer le cercle décrivant le ventricule gauche et ainsi trouver une seed située en son centre, 
                    deux options s'offrent à nous :
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-3 text-justify">
                    <li>
                        Chercher de nombreux cercles avec des paramètres de Hough permissifs, puis établir une carte de probabilité 
                        pour identifier la zone la plus probable du ventricule gauche.
                    </li>
                    <li>
                        Restreindre les paramètres de Hough pour ne détecter qu'un seul cercle, en espérant qu'il soit correctement placé.
                    </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Observons les cercles détectés à partir de l'image masquée, en utilisant des paramètres permissifs.
                </p>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/necessite_hough.webp" alt="Cercles trouvés avec des paramètres permissifs" className="rounded-lg shadow-md w-3/4" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Cercles trouvés avec des paramètres permissifs</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Sur cette image, nous constatons que la plupart des cercles détectés ne sont pas centrés sur le ventricule. 
                    En fait, un seul cercle semble correctement positionné. Cette observation nous conduit à privilégier la deuxième 
                    approche : restreindre les paramètres de Hough pour n'obtenir qu'un seul cercle correctement placé.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Nous allons donc implémenter une fonction <code>best_hough</code> qui ajuste automatiquement les paramètres pour 
                    détecter un unique cercle correspondant au ventricule gauche.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">3.5 Best Hough</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Notre première intuition est de chercher les paramètres de Hough par dichotomie. En effet, pour des paramètres <strong>grands</strong>, on obtient <strong>aucun cercle</strong>, et pour des paramètres <strong>faibles</strong>, on en obtient beaucoup. Une dichotomie permettra alors d’isoler les bons. On propose alors une dichotomie classique :
                </p>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/hough_dichotomie_fct.webp" alt="Pseudo-Code d'une dichotomie sur Hough" className="rounded-lg shadow-md w-3/4" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Pseudo-Code d'une dichotomie sur Hough</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Néanmoins, lorsque nous implémentons cette approche, on observe qu’aucune seed n’est trouvée pour de nombreux patients du dataset. Cela s’explique par le fait que notre fonction peut tomber dans un minimum local, comme on le représente sur la figure ci-dessous.
                </p>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/dichotomie.webp" alt="Minimum local" className="rounded-lg shadow-md w-3/4" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Motivation d'une dichotomie améliorée</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    De plus, expérimentalement, nous observons que pour un cercle unique, les paramètres qui ont tendance à être les plus grands trouvent le meilleur cercle. Ainsi, nous proposons une deuxième implémentation de recherche des meilleurs paramètres :
                </p>

                <div className="flex justify-center mb-4 mt-4">
                    <img src="/3dt/best_hough_fct.webp" alt="Pseudo-Code de notre fonction Best Hough" className="rounded-lg shadow-md w-full" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Pseudo-Code de notre fonction Best Hough</p>

                <h4 className="text-lg font-semibold mt-6 mb-4 text-gray-800 text-left">Implémentation Python</h4>

                <FunctionDetail
                    functionName="best_hough"
                    functionDescription="Cherche les meilleurs paramètres pour détecter un cercle unique via Hough."
                    functionCode={`def best_hough(image): # iterate + max dichotomie
    step = 5
    for param1 in range(180, 20, -step):
        circles = cv2.HoughCircles(image, cv2.HOUGH_GRADIENT, 1, 20,
                            param1=param1, param2=param1/2, 
                            minRadius=10, maxRadius=50)
        
        if circles is not None:
            for param in range(param1+step, param1, -1):
                circles = cv2.HoughCircles(image,cv2.HOUGH_GRADIENT,
                                            1, 20, 
                                            param1=param, 
                                            param2=param/2, 
                                            minRadius=10, 
                                            maxRadius=50)
                if circles is not None and len(circles[0]) == 1:
                    return circles[0][0]
    return None`}
                />

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Observons les résultats obtenus sur 5 patients sélectionnés aléatoirement :
                </p>

                <div className="flex justify-center mb-4">
                    <img src="/3dt/5patients.webp" alt="Résultat de notre implémentation sur 5 patients" className="rounded-lg shadow-md w-full" />
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">3.6 Métrique d'évaluation des performances</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Pour évaluer la performance de notre méthode, on dispose d’une <strong>ground truth</strong> pour chaque patient que nous avons décrite dans la partie 2 de ce papier.
                </p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Il est donc possible à partir de cette dernière de définir deux métriques :
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-4 text-justify">
                    <li>
                        <strong>Distance :</strong> La distance entre la seed trouvée et le centre de la ground truth.
                        <MathJax>{`$$ \\text{Distance} = ||\\text{seed} - \\text{centre(gt)}||_2 $$`}</MathJax>
                    </li>
                    <li>
                        <strong>Hit :</strong> Un booléen qui indique simplement si la seed est <strong>dans</strong> ou <strong>hors</strong> du ventricule gauche de la ground truth.
                        <MathJax>{`
                        $$ 
                        \\text{Hit} = 
                        \\begin{cases} 
                        \\text{True} & \\text{si } \\text{seed} \\in \\text{gt} = 3, \\\\
                        \\text{False} & \\text{sinon.}
                        \\end{cases} 
                        $$`}</MathJax>
                    </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    On en profite pour renvoyer une troisième métrique, qui dira simplement si une seed (donc un cercle) a été trouvée ou non.
                </p>

                <FunctionDetail
                    functionName="patient_metrics"
                    functionDescription="
                    Calcule trois métriques :
                    1. si un cercle est trouvé, 
                    2. la distance entre la seed et le centre de la GT,
                    3. si la seed est dans le ventricule gauche."
                    functionCode={`def patient_metrics(patient, circles, Slice=Slice):
    # Calcul de 3 métriques :
    # 1) cercle trouvé ?
    # 2) distance entre le centre et la GT
    # 3) seed dans le ventricule gauche ?
    t_gt = patient.gt.data.clone().detach().float()
    center = (t_gt[0, :, :, Slice]==3).argwhere().mean(axis=0, 
        dtype=torch.float32)
    if circles is None:
        return False, 0., False

    dist = torch.dist(center, torch.tensor(circles[:2]))
    gt_map = patient.gt.data.clone().detach().float()
    hit = (gt_map[0, int(circles[1]), int(circles[0]), Slice] == 3)

    return True, dist, hit`}
                />

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Évaluons ces trois métriques sur notre dataset de training, puis sur celui de test (que nous n’avons ouvert qu’une fois le projet terminé et qu’aucune modification n’a été apportée au code).
                </p>

                <div className="flex justify-center mb-4">
                    <pre className="bg-gray-100 p-4 rounded-md text-gray-800 shadow-md whitespace-pre-line text-sm">
                - = results = - <br />
                accuracy: 98.0% (over found circles: 98.0) <br />
                miss: 0 <br />
                avg dist (au carré): 42.95237731933594 <br />
                - ============ -
                    </pre>
                </div>
                <p className="text-gray-500 italic text-center mb-6">Résultats obtenus sur les données de training et de test</p>

                <h4 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">Performances sur les ensembles training et test</h4>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Les performances sur la partie <strong>training</strong> ainsi que la partie <strong>test</strong> sont les suivantes. 
                    L'accuracy correspond au pourcentage de <i>Hits</i> sur l'ensemble sur lequel on travaille.
                </p>

                <div className="flex justify-center">
                    <table className="table-auto border-collapse border border-gray-300 w-2/3 text-sm mb-2">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">&nbsp;</th>
                                <th className="border border-gray-300 px-4 py-2">Training</th>
                                <th className="border border-gray-300 px-4 py-2">Test</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Cercle Trouvé</td>
                                <td className="border border-gray-300 px-4 py-2">93%</td>
                                <td className="border border-gray-300 px-4 py-2">98%</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Accuracy</td>
                                <td className="border border-gray-300 px-4 py-2">93%</td>
                                <td className="border border-gray-300 px-4 py-2">98%</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Average Distance</td>
                                <td className="border border-gray-300 px-4 py-2">41.16</td>
                                <td className="border border-gray-300 px-4 py-2">42.95</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-500 italic text-center mb-6">Performances sur les ensembles training et test</p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">3.7 Multiple Slices</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Comme on peut le remarquer, il reste quelques images sur lesquelles on ne trouve pas de seed. Cela est problématique pour la suite car sans point de départ, on peut dire adieu à toute segmentation. Essayons donc de trouver une méthode qui pourrait aller chercher ces quelques pourcents manquants. Pour cela, on introduit la fonction suivante :
                </p>

                <FunctionDetail
                    functionName="find_seed_multiple_slices"
                    functionDescription="Cherche une seed sur toutes les tranches d’un patient pour augmenter les chances d’en trouver une."
                    functionCode={`def find_seed_multiple_slices(patient, Tps=Tps):
    seeds = []
    for slice in range(0, patient.img.data.shape[3]):
        seed = find_seed(patient, Tps=Tps, Slice=slice)
        if seed is not None:
            seeds += [seed]
    seeds = np.array(seeds)

    if len(seeds) == 0:
        return None

    dist = []
    for s in seeds:
        d = seeds - s
        d = d * d 
        dist += [np.sum(d)]

    avg_slice = np.argmin(dist)
    return seeds[avg_slice], avg_slice`}
                />

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Son objectif est simple : au lieu de chercher une seed sur une tranche du patient à l'instant <i>t</i>, on va chercher des seeds sur toutes les tranches. On espère alors que si l'une des tranches ne permet pas de trouver de cercle, ce n'est pas le cas de toutes les tranches.
                </p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Une fois les seeds trouvées, on conserve uniquement la seed qui a la distance minimale par rapport à toutes les autres. Et avec <i>S</i> l'ensemble des Seeds :
                </p>

                <MathJax>{`
                \\[
                \\begin{align*}
                \\text{seed} &= \\min(\\text{dist}(\\text{autres seeds})) \\\\
                            &= \\text{argmin}_{s_1 \\in S} \\sum_{s_2 \\in S}||s_1-s_2||^2
                \\end{align*}
                \\]
                `}</MathJax>



                <FunctionDetail
                    functionName="find_seed_multiple_slices"
                    functionDescription="Cherche une seed en analysant toutes les tranches disponibles, puis sélectionne la seed la plus centrale."
                    functionCode={`def find_seed_multiple_slices(patient, Tps=Tps):
    seeds = []
    for slice in range(0, patient.img.data.shape[3]):
        seed = find_seed(patient, Tps=Tps, Slice=slice)
        if seed is not None:
            seeds.append(seed)
    seeds = np.array(seeds)

    if len(seeds) == 0:
        return None

    dist = []
    for s in seeds:
        d = np.sum((seeds - s)**2, axis=1)
        dist.append(np.sum(d))

    avg_slice = np.argmin(dist)
    return seeds[avg_slice], avg_slice`}
                />

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Et ainsi, en mesurant les performances à l'aide de notre nouvelle méthode, sur le <strong>training</strong> ainsi que sur le <strong>testing</strong>, on obtient les résultats suivants :
                </p>

                <div className="flex justify-center">
                <table className="table-auto border-collapse border border-gray-300 w-2/3 text-sm mb-2">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">&nbsp;</th>
                            <th className="border border-gray-300 px-4 py-2">Training</th>
                            <th className="border border-gray-300 px-4 py-2">Test</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Cercle Trouvé</td>
                            <td className="border border-gray-300 px-4 py-2">97%</td>
                            <td className="border border-gray-300 px-4 py-2">100%</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Accuracy</td>
                            <td className="border border-gray-300 px-4 py-2">97%</td>
                            <td className="border border-gray-300 px-4 py-2">100%</td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <p className="text-gray-500 italic text-center mb-6">Performances de la nouvelle méthode sur les ensembles training et test</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Voici les résultats obtenus, avec une liste des patients manqués et les statistiques globales :
                </p>

                <div className="flex justify-center mb-4">
                    <pre className="bg-gray-100 p-4 rounded-md text-gray-800 shadow-md whitespace-pre-line text-sm">
                miss on patient n° 24, n°33, n°37 <br />
                - = results = - <br />
                accuracy: 97.0% (over found circles: 97.0)  <br />
                miss: 0 <br />
                avg dist: 42.5 <br />
                - ============ -
                    </pre>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">3.8 Résultats du Placement des Seeds</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    On synthétise les performances de nos divers algorithmes avec le graphique suivant. Comme on peut l'observer, la performance sur le test est supérieure à celle sur le training, ce qui peut paraître surprenant mais peut s'expliquer par le faible nombre d'images.
                </p>

                <div className="flex justify-center mb-2 mt-2">
                    <img src="/3dt/accuracy of seed in LV.webp" alt="Accuracy sur les deux parties du DataSet pour les différentes méthodes" className="rounded-lg shadow-md w-full" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Accuracy sur les deux parties du DataSet pour les différentes méthodes</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    <strong>100% de réussite</strong> sur la partie test du dataset ! C’est un score suffisant pour passer à la suite du projet.
                </p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    <i>Remarque :</i> Si on observe les trois images qui posent problème, la seed trouvée est systématiquement très proche du ventricule, voire juste à la bordure.
                </p>

                <div className="flex justify-between gap-4 mb-8">
                    <img src="/3dt/cercles_024.webp" alt="Patient 24" className="rounded-lg shadow-md w-1/3" />
                    <img src="/3dt/cercles_033.webp" alt="Patient 33" className="rounded-lg shadow-md w-1/3" />
                    <img src="/3dt/cercles_037.webp" alt="Patient 37" className="rounded-lg shadow-md w-1/3" />
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-left">4. Segmentation du ventricule gauche</h2>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Une fois une seed correctement placée au centre du ventricule gauche, nous pouvons chercher à segmenter ce dernier en utilisant une approche par croissance de région.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">4.1 Segmentation par croissance de région</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Le principe de la segmentation par croissance de région est simple et peut être décrit par les étapes suivantes :
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-4 text-justify">
                    <li><strong>Initialisation :</strong> On initialise la région comme vide. On marque tous les pixels de l'image comme non explorés, et on ajoute la seed (non explorée) à la région. On détermine un <strong>treshold</strong> qui sera le critère d'arrêt de notre segmentation.</li>
                    <li><strong>Tant qu'il existe</strong> des pixels de la région marqués comme non explorés :
                        <ul className="list-disc pl-6">
                            <li>On choisit l'un de ces pixels.</li>
                            <li>On regarde ses 4 voisins directs. Pour chacun d'entre eux, si la différence en valeur absolue de l'intensité du pixel examiné et de son voisin est inférieure au treshold, on ajoute le voisin à la région.</li>
                            <li>On marque le pixel comme étant examiné.</li>
                        </ul>
                    </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    C'est la région obtenue en sortie de la boucle qui doit correspondre à notre ventricule gauche.
                </p>

                <div className="flex justify-center mb-6">
                    <img src="/3dt/region_growing.webp" alt="Schéma simplifié région growing" className="rounded-lg shadow-md w-4/5" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Schéma simplifié région growing</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    L'algorithme est assuré de se terminer, puisque le nombre de pixels de l'image est fini, et sa complexité dans le pire des cas est <MathJax inline>{`\\(O(n^2)\\)`}</MathJax>.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">4.2 Adaptation de l'algorithme à notre contexte</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    L'algorithme peut être ajusté pour mieux s'adapter à notre situation spécifique. Les améliorations suivantes ont été introduites :
                </p>

                <ol className="list-decimal pl-6 text-gray-700 mb-4 text-justify">
                    <li><strong>Utilisation de la médiane d'intensité autour de la seed :</strong>
                        <ul className="list-disc pl-6">
                            <li>Au lieu de comparer directement les différences d'intensité entre un pixel et ses voisins, nous estimons d'abord la valeur médiane d'intensité du ventricule gauche dans une fenêtre de <MathJax inline>{`\\(11 \\times 11\\)`}</MathJax> autour de la seed.</li>
                            <li>Ensuite, les nouveaux pixels sont comparés à cette médiane.</li>
                            <li>Cette approche réduit les phénomènes de "fuite", qui peuvent se produire à cause du gradient d'intensité souvent observé dans le ventricule gauche.</li>
                        </ul>
                    </li>
                    <li><strong>Prise en compte de la zone sombre entourant le ventricule :</strong>
                        <ul className="list-disc pl-6">
                            <li>Il est intéressant de noter que le ventricule gauche est généralement entouré d'une zone d'intensité plus faible.</li>
                            <li>Pour exploiter cette propriété, nous adaptons le seuil de comparaison pour privilégier les valeurs supérieures à la médiane.</li>
                            <li>Cela permet de mieux segmenter les zones de forte intensité situées au centre du ventricule, tout en excluant efficacement les zones environnantes.</li>
                        </ul>
                    </li>
                </ol>

                <FunctionDetail
                    functionName="region_growth"
                    functionDescription="Effectue une segmentation par croissance de région en prenant en compte un seuil et une intensité médiane."
                    functionCode={`def region_growth(image, seed, error=10):
    H, L = image.shape
    # Estimation de la moyenne
    moy = np.median([image[seed[1] + i, seed[0] + j] for i in range(-2, 3) for j in range(-2, 3)])

    # Initialisation
    to_explore = deque([np.array(seed)])
    dxy = np.array([[0, -1], [-1, 0], [1, 0], [0, 1]])
    left_V = np.zeros_like(image)
    valide = (moy - image < error) & (np.arange(H)[:, None] > 0) & (np.arange(H)[:, None] < H-1) & (np.arange(L) > 0) & (np.arange(L) < L-1)

    # Croissance de région
    while to_explore:
        y, x = to_explore.popleft()
        if valide[y, x] and not left_V[y, x]:
            left_V[y, x] = 1
            to_explore.extend(dxy + [x, y])

    return left_V, np.sum(left_V)`}
                />

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">4.3 Choix du Threshold</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    L'étape délicate d'une telle méthode de segmentation réside dans le choix du threshold. En effet, observons la segmentation décrite ci-dessus pour différentes valeurs de thresholds.
                </p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Pour cela, nous définissons la fonction <code>region_growth</code>, qui reprend l'approche expliquée ci-dessus à partir d'un threshold fourni en entrée. La fonction retourne la région segmentée sous forme d'une région <strong>connexe</strong> de 1 dans une image de 0, ainsi que la taille de cette région.
                </p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    On peut ainsi observer la segmentation produite pour quatre valeurs de thresholds différentes : 
                </p>
                <MathJax>{`
                    $$ \\text{thresholds} = [30, 120, 150, 200] $$
                `}</MathJax>

                <div className="flex justify-center mb-2">
                    <img src="/3dt/treshold_comparaison.webp" alt="Comparaison des thresholds" className="rounded-lg shadow-md w-4/5" />
                </div>
                
                <p className="text-gray-500 italic text-center mb-6">Visualisation des thresholds différents pour deux patients</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Pour deux patients différents du dataset, les thresholds optimaux sont différents. En effet, pour le patient n°28, la région segmentée explose au-delà de 120, tandis que pour le patient n°33, un threshold de 150 ne suffit toujours pas à faire exploser la région.
                </p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Ces variations de luminosité entre les images et le contraste du ventricule gauche soulignent un point important : <strong>le seuil (threshold) doit être adapté pour chaque patient.</strong>
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">4.4 Approche pour ajuster automatiquement le threshold</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Pour cela, nous proposons l'approche suivante :
                </p>

                <ul className="list-decimal pl-8 text-gray-700 mb-4 text-justify">
                    <li><strong>Réaliser une segmentation par region growing avec différents paramètres de seuil.</strong></li>
                    <li>
                        <strong>Évaluer chaque segmentation à l'aide d'une métrique spécifique pour déterminer la segmentation la plus plausible :</strong>
                        <ul className="list-disc pl-10">
                            <li>La métrique que nous utilisons s'appuie sur le disque détecté par la transformée de Hough.</li>
                            <li>Nous cherchons une segmentation qui correspond au disque tout en évitant les débordements.</li>
                            <li>
                                Soit <MathJax inline>{`\\(D\\)`}</MathJax> le disque détecté. La métrique est définie comme suit :
                                <MathJax>{`
                                $$ 
                                m(S, D) = \\frac{2 \\cdot |S \\cap D| - |S \\cap \\bar{D}|}{|S| + |D|}
                                $$ 
                                `}</MathJax>
                                où <MathJax inline>{`\\(S\\)`}</MathJax> est la segmentation, <MathJax inline>{`\\(D\\)`}</MathJax> est le disque, et <MathJax inline>{`\\(\\bar{D}\\)`}</MathJax> représente la région extérieure au disque.
                            </li>
                        </ul>
                    </li>
                    <li><strong>Sélectionner la segmentation qui minimise cette métrique, ainsi que le seuil correspondant.</strong></li>
                </ul>

                <FunctionDetail
                    functionName="leftv_seg"
                    functionDescription="Effectue la segmentation par croissance de région avec ajustement automatique du threshold basé sur une métrique spécifique."
                    functionCode={`def leftv_seg(img, full_seed=None, Tps=Tps, Slice=Slice):
    if full_seed is None:
        return None

    seed = [int(full_seed[0]), int(full_seed[1])]
    rayon = full_seed[2]

    xx, yy = np.mgrid[:img.shape[0], :img.shape[1]]
    circle = (xx - seed[1]) ** 2 + (yy - seed[0]) ** 2
    circle_map = np.zeros(img.shape, np.bool_)
    circle_map[circle < rayon*rayon] = True

    dices = []

    for treshold in range(5, 150, 5):
        lv_seg, _ = region_growth(np.array(img), seed, treshold)
        lv_seg = np.bool_(lv_seg)

        inter = np.sum(lv_seg & circle_map)
        diff_ext = np.sum(lv_seg & np.logical_not(circle_map))
        dice = (2*inter-diff_ext) / (np.sum(lv_seg) 
                                        + np.sum(circle_map))
        dices.append((dice, treshold))

    best_treshold = max(dices)[1]
    lv_seg, _ = region_growth(np.array(img), seed, best_treshold)

    return lv_seg`}
                />

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">4.5 Métrique DICE</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Pour évaluer nos segmentations, nous introduisons la mesure du DICE entre des ensembles :
                </p>
                <MathJax>{`
                $$
                DICE(A, B) = \\frac{2 \\cdot |A \\cap B|}{|A| + |B|}
                $$
                `}</MathJax>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    où :
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 text-justify">
                    <li><MathJax inline>{`\\(A\\)`}</MathJax> : segmentation prédite</li>
                    <li><MathJax inline>{`\\(B\\)`}</MathJax> : vérité terrain</li>
                    <li><MathJax inline>{`\\(|A\\cap B|\\)`}</MathJax> : taille de l'intersection des ensembles</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    <strong>Interprétation du DICE :</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 text-justify">
                    <li><strong>0 :</strong> aucun chevauchement</li>
                    <li><strong>1 :</strong> chevauchement parfait</li>
                </ul>

                <FunctionDetail
                    functionName="dice"
                    functionDescription="Calcule la mesure de DICE pour évaluer la qualité de la segmentation par rapport à la vérité terrain."
                    functionCode={`def dice(patient, lv_seg, Slice=Slice):
    t_gt = patient.gt.data.clone().detach().float()
    gt_map = t_gt[0, :, :, Slice]
    gt_map = (gt_map == 3)
    
    lv_seg = np.bool_(lv_seg)
    gt_map = np.bool_(gt_map)
    inter = np.sum(lv_seg & gt_map)
    
    return 2 * inter / (np.sum(lv_seg) + np.sum(gt_map))`}
                />

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">4.6 Évaluation de la segmentation 2D</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    À la lumière de ce que nous venons de décrire, il est possible de calculer la segmentation 2D à l'instant 0 pour tous les patients du Dataset, et de calculer la mesure de DICE pour chacun d'entre eux. Voici un exemple de fonction :
                </p>

                <FunctionDetail
                    functionName="evaluate_avg_dice2D"
                    functionDescription="Réalise la segmentation 2D pour tous les patients du Dataset à l'instant 0 et calcule la moyenne du DICE."
                    functionCode={`def evaluate_avg_dice2D(nb):
    avg_dice = 0
    for i in range(nb):
        patient = load_patient(i+1)
        lv_seg = leftv_seg(patient.img.data[0], Tps=0, Slice=11)
        if lv_seg is not None:
            avg_dice += dice(patient, lv_seg, Slice=11)
    return avg_dice / nb`}
                />

                <div className="flex justify-center mb-4">
                    <pre className="bg-gray-100 p-4 rounded-md text-gray-800 shadow-md whitespace-pre-line text-sm">
                --== results ==-- <br />
                avg dice: 0.8574507052659606 <br />
                -========-
                    </pre>
                </div>
                <p className="text-gray-500 italic text-center mb-6">Résultats obtenus sur l'évaluation 2D</p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    En exécutant l'algorithme sur les ensembles d'entraînement et de test, nous obtenons les résultats suivants :
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-4 text-justify">
                    <li><strong>DICE sur l'entraînement :</strong> 85.7%</li>
                    <li><strong>DICE sur le test :</strong> 86.7%</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    <strong>Interprétation :</strong> Un DICE supérieur à 0.8 indique des segmentations très proches de la vérité terrain. Ces résultats montrent que l'algorithme généralise bien, et le score légèrement plus élevé sur l'ensemble de test suggère que le modèle :
                </p>

                <ol className="list-decimal pl-10 text-gray-700 mb-4 text-justify">
                    <li><strong>N'est pas surentraîné,</strong> évitant ainsi de sur-ajuster les données d'entraînement.</li>
                    <li><strong>Pourrait bénéficier</strong> d'un ensemble de test contenant des cas plus homogènes.</li>
                </ol>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-left">5. Passage au Volume</h2>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Nous disposons désormais d'une méthode robuste pour segmenter le ventricule gauche sur des images 2D. L'étape suivante consiste à étendre cette segmentation aux images 3D+t.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Cependant, la ground truth n'est disponible que pour une seule coupe temporelle, correspondant à la diastole. Dans un premier temps, nous allons donc analyser la propagation de la seed en 3D, en nous concentrant sur cette unique coupe temporelle.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">5.1 Algorithme pour obtenir la segmentation en 3D</h3>

                <ol className="list-decimal pl-6 text-gray-700 mb-4 text-justify">
                    <li><strong>Utiliser</strong> <code>find_seed_multiple_slices</code> <strong>pour trouver une seed et une slice initiale.</strong></li>
                    <li>Effectuer la segmentation 2D sur cette slice initiale.</li>
                    <li><strong>Propager la segmentation aux slices voisines :</strong>
                        <ul className="list-disc pl-6">
                            <li>Pour chaque slice voisine d'une slice déjà segmentée, on utilise la segmentation précédente pour définir le cercle de la seed de la slice suivante.</li>
                            <li>Le centre <MathJax inline>{`\\(c_n\\)`}</MathJax> de la seed suivante est donné par le barycentre de la segmentation précédente : 
                                <MathJax>{`
                                $$ c_n = \\frac{1}{|S_{n-1}|} \\sum_{p \\in S_{n-1}} p $$
                                `}</MathJax>
                            </li>
                            <li>Pour estimer le rayon <MathJax inline>{`\\(R_n\\)`}</MathJax>, on impose : 
                                <MathJax>{`
                                $$ |S_{n-1}| = \\pi R_n^2 \\quad \\Rightarrow \\quad R_n = \\sqrt{\\frac{|S_{n-1}|}{\\pi}} $$
                                `}</MathJax>
                            </li>
                        </ul>
                    </li>
                </ol>

                <FunctionDetail
                    functionName="slice3D"
                    functionDescription="Étend la segmentation sur plusieurs slices en 3D à partir d’une slice initiale."
                    functionCode={`def slice3D(patient):
    ED = patient.info["ED"] - 1
    seed0, sslice = find_seed_multiple_slices(patient, ED)
    
    img_3D = patient.img.data[ED]
    lv3D = np.zeros_like(img_3D)

    if seed0 is None:
        return lv3D

    # Segmentation initiale
    lv3D[:, :, sslice] = leftv_seg(img_3D[:, :, sslice], seed0, 
                                        Tps=Tps, Slice=sslice)

    # Propagation de la seed vers les tranches suivantes
    for s in range(sslice+1, lv3D.shape[2]):
        lv_1 = lv3D[:, :, s-1]
        idxs = np.where(lv_1 == 1)
        if len(idxs[0]) == 0:
            break
        center = np.mean(idxs, axis=1)
        radius = np.sqrt(len(idxs[0]) / np.pi)
        lv3D[:, :, s] = leftv_seg(img_3D[:, :, s], [center[1], 
                    center[0], radius], Tps=Tps, Slice=sslice)

    # Propagation de la seed vers les tranches précédentes
    for s in range(sslice-1, -1, -1):
        lv_1 = lv3D[:, :, s+1]
        idxs = np.where(lv_1 == 1)
        if len(idxs[0]) == 0:
            break
        center = np.mean(idxs, axis=1)
        radius = np.sqrt(len(idxs[0]) / np.pi)
        lv3D[:, :, s] = leftv_seg(img_3D[:, :, s], [center[1], 
                    center[0], radius], Tps=Tps, Slice=sslice)

    return lv3D`}
                />

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">5.2 Extension des métriques à la 3D</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Après avoir obtenu cette segmentation en 3D, nous pouvons maintenant étendre les métriques pour les adapter à des mesures en 3D. Plusieurs approches sont possibles :
                </p>

                <ol className="list-decimal pl-6 text-gray-700 mb-4 text-justify">
                    <li><strong>Calculer la moyenne des mesures DICE sur chaque slice individuelle.</strong></li>
                    <li><strong>Effectuer une mesure DICE globale en 3D</strong> sur l'ensemble de la segmentation 3D.</li>
                </ol>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Bien que nous travaillions en 3D, la formule du DICE reste identique :
                </p>
                <MathJax>{`
                $$ DICE(A, B) = \\frac{2|A \\cap B|}{|A| + |B|} $$
                `}</MathJax>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Cette approche nous permet d’évaluer directement la qualité de la segmentation 3D en tenant compte de l'ensemble du volume segmenté.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">5.3 Performances 3D</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    On peut ainsi calculer les performances pour l'instant <MathJax inline>{`\\(t=0\\)`}</MathJax> (puisque la GT n'est disponible que sur cet instant) sur l'ensemble du Dataset. Les performances sont présentées ci-dessous.
                </p>

                <FunctionDetail
                    functionName="Calcul des performances 3D"
                    functionDescription="Calcule la mesure de Dice 3D pour chaque patient et affiche les résultats moyens."
                    functionCode={`avg_dice = 0
    nb = 50
    found = 0
    for i in range(nb):
        patient = load_patient(i + 1, testing=True)
        seg3D = slice3D(patient)
        if seg3D is not None: 
            dice = dice3D(patient, seg3D)
            avg_dice += dice
            found += 1
            print(f"Patient {i+1} : {(100 * dice):.2f} %")

    avg_dice /= found
    print(f"Average Dice : {100 * avg_dice:.3f} % (found: {found})`}
                />

                <div className="flex justify-center mb-6">
                    <pre className="bg-gray-100 p-4 rounded-md text-gray-800 shadow-md whitespace-pre-line text-sm">
                        --== Results ==-- <br />
                        AVG Dice3D sur Training: 72.010% (found: 100) <br />
                        AVG Dice3D sur Test: 77.108 % (found: 50) <br />
                        -========-
                    </pre>
                </div>
                <p className="text-gray-500 italic text-center mb-6">Performances calculées sur l’ensemble des patients</p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">5.4 Observation sur un patient</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Visualisons notre segmentation 3D sur un patient du Dataset. Pour cela, on affiche toutes ses tranches à l'instant 0.
                </p>

                <div className="flex flex-col items-center mb-6">
                    <img src="/3dt/obs_3D.webp" alt="3 premières tranches" className="rounded-lg shadow-md w-4/5 mb-2" />
                    <p className="text-gray-500 italic text-center">Segmentation 3D sur les 3 premières tranches du patient 32</p>

                    <img src="/3dt/obs_3Dbis.webp" alt="3 suivantes" className="rounded-lg shadow-md w-4/5 mb-2 mt-2" />
                    <p className="text-gray-500 italic text-center">3 suivantes</p>

                    <img src="/3dt/obs_3Dbisbis.webp" alt="Segmentation 3D sur les tranches du patient 32" className="rounded-lg shadow-md w-4/5 mb-2 mt-2" />
                    <p className="text-gray-500 italic text-center">3 dernières</p>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-left">6. Passage de la 3D à la 3D+t</h2>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Le processus de segmentation en 3D+t (avec une composante temporelle) est similaire à la segmentation classique en 3D. Cependant, il ajoute une dimension temporelle à la propagation.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">6.1 Étapes du processus</h3>

                <ol className="list-decimal pl-6 text-gray-700 mb-4 text-justify">
                    <li>
                        <strong>Propagation temporelle :</strong>
                        <ul className="list-disc pl-6">
                            <li>La segmentation commence sur une slice à un instant donné (ED).</li>
                            <li>Cette segmentation est propagée dans le temps vers les autres instants temporels.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Propagation spatiale :</strong>
                        <ul className="list-disc pl-6">
                            <li>Pour chaque instant temporel, on utilise la segmentation obtenue pour cet instant comme point de départ.</li>
                            <li>
                                La propagation est alors effectuée sur les autres slices de l'espace 3D, suivant la méthode classique de segmentation 3D.
                            </li>
                        </ul>
                    </li>
                </ol>

                <div className="flex justify-center mb-6">
                    <img src="/3dt/propagatiokn3D_t.webp" alt="Schéma Propagation des Seeds" className="rounded-lg shadow-md w-full" />
                </div>
                <p className="text-gray-500 italic text-center mb-6">Schéma Propagation des Seeds</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">6.2 Implémentation</h3>

                <FunctionDetail
                    functionName="expend3D"
                    functionDescription="Étend les seeds à toutes les slices d'un patient pour un unique instant temporel."
                    functionCode={`def expend3D(img_3D, lv3D, sslice):
    # Propagation des seeds
    for s in range(sslice+1, lv3D.shape[2]):
        lv_1 = lv3D[:, :, s-1]
        idxs = np.where(lv_1 == 1)
        if len(idxs[0]) == 0:
            break
        center = np.mean(idxs, axis=1)
        # Rayon calculé à partir du volume
        radius = np.sqrt(len(idxs[0])/np.pi)
        lv3D[:, :, s] = leftv_seg(img_3D[:, :, s], [center[1], 
                    center[0], radius], Tps=Tps, Slice=sslice)

    for s in range(sslice-1, -1, -1):
        lv_1 = lv3D[:, :, s+1]
        idxs = np.where(lv_1 == 1)
        if len(idxs[0]) == 0:
            break
        center = np.mean(idxs, axis=1)
        radius = np.sqrt(len(idxs[0])/np.pi)
        lv3D[:, :, s] = leftv_seg(img_3D[:, :, s], [center[1], 
                    center[0], radius], Tps=Tps, Slice=sslice)`}
                />

                <FunctionDetail
                    functionName="slice3D_t"
                    functionDescription="Réalise la segmentation sur toutes les slices d'un patient et pour tous les instants temporels."
                    functionCode={`def slice3D_t(patient):
    # Fonction qui reprend l'intégralité des 
    # opérations précédentes pour segmenter en 3D+t
    ED = patient.info["ED"] - 1
    # Détermine l'indice de la tranche de la vérité terrain.

    seed0, sslice = find_seed_muliple_slices(patient, ED)

    img_3D = patient.img.data
    lv3D_t = np.zeros_like(img_3D)

    # Pour chaque instant temporel
    for t in range(img_3D.shape[0]):
        lv3D = np.zeros_like(img_3D[t])
        if seed0 is None:
            continue

        # Segmentation initiale sur une slice
        lv3D[:, :, sslice] = leftv_seg(img_3D[t, :, :, sslice], 
                                seed0, Tps=Tps, Slice=sslice)

        # Propagation en 3D pour cet instant
        expend3D(img_3D[t], lv3D, sslice)

        lv3D_t[t] = lv3D
    return lv3D_t`}
                />

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">6.3 Résultats</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Après avoir exécuté nos algorithmes, nous mesurons la qualité des segmentations à l’aide du <strong>DICE</strong> sur la slice temporelle correspondant à la ground truth.
                </p>

                <div className="flex justify-center items-center my-12">
                    <video
                        src="/3dt/volume_video.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        preload="auto"
                        className="rounded-lg shadow-lg max-w-full"
                        width="800"
                        height="450"
                    >
                        Vidéo non supportée
                    </video>
                </div>

                <div className="flex justify-center mb-2">
                    <table className="table-auto border-collapse border border-gray-300 w-4/5 text-sm">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left"> </th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Entraînement</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Test</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">DICE 3D</td>
                                <td className="border border-gray-300 px-4 py-2">76.1%</td>
                                <td className="border border-gray-300 px-4 py-2">77.1%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-500 italic text-center mb-6">Performances 3D</p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">6.4 Interprétation des Résultats</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Ces résultats représentent des <strong>moyennes globales</strong>, mais elles sont fortement influencées par quelques cas extrêmes où le DICE est faible.
                </p>

                <div className="flex flex-col items-center mb-6">
                    <img src="/3dt/frame_heart_f.webp" alt="Segmentation 3D+T" className="rounded-lg shadow-md w-4/5 mb-4" />
                    <p className="text-gray-500 italic text-center">Segmentation 3D+T</p>

                    <img src="/3dt/courbe_volume.webp" alt="Volume du ventricule gauche segmenté" className="rounded-lg shadow-md w-4/5 mb-4" />
                    <p className="text-gray-500 italic text-center">Volume du ventricule gauche segmenté</p>
                </div>

                <ul className="list-disc pl-6 text-gray-700 mb-4 text-justify">
                    <li><strong>Observation générale :</strong> La majorité des scores DICE se situent autour de <strong>88%</strong>, indiquant des segmentations proches de la vérité terrain dans la plupart des cas.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 text-left">6.5 Problème des slices extrêmes</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Lors de la segmentation temporelle, certaines slices montrent un <strong>volume anormalement grand</strong>, dû à une croissance de région excessive. Ce phénomène se produit principalement :
                </p>

                <ul className="list-disc pl-10 text-gray-700 mb-4 text-justify">
                    <li>Sur les slices temporelles extrêmes (où le cœur est à peine visible).</li>
                    <li>En raison du débordement de la segmentation sur des régions hors du ventricule.</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Pour corriger ce problème, il serait pertinent d’implémenter un <strong>système de détection des slices anormales</strong>, basé sur des critères de cohérence spatiale et temporelle avec les slices adjacentes.
                </p>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Un tel système permettrait de limiter les artefacts et d’améliorer encore la robustesse de l’algorithme.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-left">7. Pour aller plus loin</h2>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Plusieurs pistes peuvent être explorées pour améliorer nos algorithmes et aller au-delà des approches actuelles :
                </p>

                <ol className="list-decimal pl-6 text-gray-700 mb-4 text-justify">
                    <li>
                        <strong>Approximation du ventricule par un plan :</strong> 
                        Une première idée est de modéliser l'intensité du ventricule gauche par un plan, en exploitant le gradient d'intensité observé à travers le ventricule. Cette méthode, inspirée d'une publication, peut guider le processus de segmentation.  
                        Cependant, en pratique, cette approche a montré une plus grande propension à laisser le region growing s'étendre dans des zones en dehors du ventricule. Notre version modifiée de region growing s’est avérée plus performante sur les données disponibles.
                    </li>
                    <li>
                        <strong>Détection des slices qui explosent dans la croissance de région :</strong>  
                        Certaines slices présentent une croissance anormale en taille lors du processus de segmentation.  
                        Pour y remédier, une amélioration possible serait de détecter ces slices problématiques et de les remplacer par des segmentations issues :
                        <ul className="list-disc pl-6">
                            <li>De slices voisines sur le plan spatial.</li>
                            <li>Ou de slices temporellement adjacentes qui n'ont pas explosé.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Optimisation des algorithmes :</strong> 
                        Une autre piste d'amélioration concerne la rapidité des algorithmes. Actuellement, beaucoup de paramètres sont explorés par <strong>force brute</strong>, ce qui est coûteux en temps de calcul. Une optimisation des algorithmes permettrait d'obtenir des résultats plus rapidement, rendant l'approche plus adaptée aux applications en temps réel ou avec de grands volumes de données.
                    </li>
                    <li>
                        <strong>Utilisation des réseaux de neurones :</strong>  
                        La segmentation du ventricule gauche sur des images 3D est une tâche parfaitement adaptée à l’utilisation de <em>réseaux de neurones convolutionnels (CNN)</em>. Ces modèles, couramment employés en pratique, pourraient offrir des résultats nettement meilleurs que les approches classiques, en exploitant efficacement les structures spatiales et temporelles des données.
                    </li>
                </ol>

                <hr className="my-8 border-gray-300" />

                <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-800 text-left">Bibliographie</h3>

                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                    Lee HY, Codella NC, Cham MD, Weinsaft JW, Wang Y. Automatic left ventricle segmentation using iterative thresholding and an active contour model with adaptation on short-axis cardiac MRI. IEEE Trans Biomed Eng. 2010 Apr;57(4):905-13. doi: 10.1109/TBME.2009.2014545. Epub 2009 Feb 6. PMID: 19203875.
                </p>

            </div>
        </MathJaxContext>
    );
};

export default Projet3DT;
