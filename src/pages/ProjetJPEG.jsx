import React, {useState} from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetJPEG',
        title: 'Détection de falsification via compression JPEG',
        description: 'Étude sur la détection de falsification d\'images basée sur le format de compression JPEG.',
        details: 'Ce projet explore l\'utilisation des coefficients de la DCT pour détecter des falsifications d\'images.',
        github: 'https://github.com/Bastaxeloux/ima-compressionjpg-main',
        pdf: '/article_zero.pdf',
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

const ProjetJPEG = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    const config = {
        loader: { load: ['input/asciimath', 'output/chtml'] },
    };

    // Vérifier si le projet existe
    if (!project) {
        return <div>Project not found. Project Id = {id}</div>;
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
                    Abstract: Le projet étudie le format de compression JPEG afin de détecter de possibles falsifications de l'image, 
                    en utilisant la méthode du papier de recherche ci-dessous. L'ensemble du code et des images est disponible sur la page GitHub.
                    <br />
                    <strong>Outils</strong> : Python et les bibliothèques : scikit-learn, scipy, OpenCV (cv2), numpy
                </p>

                {/* Boutons vers PDF et GitHub */}
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    <a
                        href={project.pdf}
                        download
                        className="inline-block bg-blue-800 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-900 transition-colors text-center min-w-[200px]"
                    >
                        Lire l'article de recherche
                    </a>
                    <a
                        href={project.github}
                        className="inline-block bg-green-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition-colors text-center min-w-[200px]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Voir sur GitHub
                    </a>
                </div>


                {/* Partie 1 : Théorie */}
                {/* Introduction */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Introduction</h2>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Imaginez, vous faites une sortie photo en soirée et prenez 300 clichés. Vous venez d'acheter le tout nouvel appareil photo 
                    dernier cri, doté d'un super capteur de 12,4 Mpx, et au moment de téléverser toutes vos photos sur une clé USB pour la 
                    montrer à votre ami, vous vous rendez compte que la taille totale si vous deviez stocker chaque pixel est de :
                </p>

                <p className="text-gray-700 leading-relaxed font-semibold text-center mb-6">
                    300 x 12,4 x 10<sup>6</sup> x 8 x 3 = 89 Gb !
                </p>

                <p className="text-gray-700 leading-relaxed text-justify">
                    Vous n'avez que chez vous des clés USB de 64Gb, il va donc falloir trouver une solution.
                    Mais quand vous regardez vos images nocturnes, vous remarquez que de nombreuses plages de l'image ont la même couleur : elles sont presque noires. 
                    Pourquoi devriez-vous stocker autant d'informations ? Alors qu'à l'œil nu, on dirait que toutes ces zones sont complètement noires… 
                    C'est alors que vous découvrez JPEG, un format de compression qui vous permet d'économiser énormément de place. On va alors réaliser une opération mathématique 
                    (la DCT pour Discrete Cosine Transform), voir que de nombreux pixels sont presque nuls, et donc décider de ne plus les stocker.
                </p>

                <div className="flex justify-center mb-4">
                    <img src="/cata.jpg" alt="Exemple d'image nocturne" className="rounded-lg shadow-md w-1/3" />
                </div>
            
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Vous divisez alors votre taille par 10, vos photos ne pèsent plus que 8,9 Gb, elles rentrent sur votre clé USB et votre ami est ravi !
                    <br />
                    Mais en faisant cela, vous avez introduit des modifications à votre image. Imperceptibles à l'œil nu, elles peuvent être utilisées pour détecter si l'image a été rognée 
                    ou falsifiée ! C'est le but de notre projet : utiliser cette grille JPEG pour la détection de falsification.
                </p>

                {/* Objectifs */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Objectifs</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 italic text-justify">
                    <li>*Détecter la présence d’une grille principale, qui nous permettra de savoir si l’image a été compressée par le passé au format JPEG, et si elle a été redimensionnée par exemple.*</li>
                    <li>*Détecter la présence de grilles secondaires, qui peuvent traduire notamment une falsification de notre image.*</li>
                </ul>

                {/* Aspect théorique */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. L’aspect théorique : la compression JPEG</h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Les meilleurs taux de compressions en JPEG sont obtenus lorsque l’image est convertie du format <strong>RGB</strong> au format <strong>YCbCr</strong> (Luminance/Chrominance). Or nous remarquons que notre code est déjà suffisamment complexe en ne prenant en compte que la luminance de chaque image, et nous verrons que cela nous donne des résultats amplement suffisants. On ne prendra donc pas en compte les canaux <strong>Cb</strong> et <strong>Cr</strong> de nos images.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    La conversion JPEG réalise ensuite un sous-échantillonnage de cette Luminance. Puis, vient l’étape importante qui nous servira de fondement à nos travaux. On découpe l’image en petits carrés de 8 pixels par 8 pixels. Ce sont sur ces <em>blocs élémentaires</em> que l’on va réaliser les opérations de compression. On utilisera cette propriété dans la suite du projet.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Puis on applique une <strong>DCT (Discrete Cosine Transform)</strong> à tous nos blocs 8x8 de l’image. Cette opération est une variante de la transformée de Fourier et décompose un bloc de pixels en une somme de fonctions cosinus oscillants à diverses fréquences. Chaque bloc est ainsi décrit en une carte de fréquences et en amplitudes plutôt qu’en pixels et coefficients de couleur. La valeur d’une fréquence reflète l’importance et la rapidité d’un changement, tandis que la valeur d’une amplitude correspond à l’écart associé à chaque changement de couleur.
                </p>


                {/* Image DCT avant l'équation */}
                <div className="flex justify-center mb-6">
                    <img src="/DCT.png" alt="DCT Image" className="rounded-lg shadow-md" />
                </div>


                <MathJax>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-semibold text-center mb-6">
                            {"$$DCT(i, j) = \\sum_{x=0}^{N-1} \\sum_{y=0}^{N-1} C(i)C(j) \\cdot p(x, y) $$"}
                        </p>
                </MathJax>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Où p(x,y) est la valeur du pixel en position (x,y) et C(k) est défini comme suit :
                </p>


                {/* Equation constante C(x) */}
                <MathJax>
                    <p className="text-gray-700 leading-relaxed font-semibold text-center mb-6">
                        {"$$C(k) = \\begin{cases} \\frac{1}{\\sqrt{2}}\\cdot \\cos\\left(\\frac{2xk\\pi}{N^2}\\right) & \\text{si} \\ k = 0 \\\\ \\cos\\left(\\frac{2xk\\pi}{N^2}\\right) & \\text{sinon} \\end{cases}$$"}
                    </p>
                </MathJax>


                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    <strong>Quantification</strong>: Ensuite, on passe à la quantification qui est l’étape où la compression se produit réellement, étape qui permet de gagner de la place mais qui en conséquent fait perdre de l’information. On va pour cela partir de chaque bloc 8x8 retourné par la DCT et diviser cette matrice par une autre que l’on appelle matrice de quantification. Nous ne rentrerons pas dans le détail du calcul de cette matrice, mais à la suite de cette opération de nombreux coefficients sont proches de zéro. Il suffit alors d’appliquer un seuillage (mettre à zéro tout pixel qui est en dessous du seuil). On obtient alors une matrice remplie de zéros et de quelques coefficients non nuls. En écrivant le résultat compressé par un codage de type Huffman, il est alors possible de gagner énormément de place.
                </p>

                {/* Image Quantization */}
                <div className="flex justify-center mb-6">
                    <img src="/quantization.png" alt="Quantization Image" className="rounded-lg shadow-md" />
                </div>

                {/* Titre de la section */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-justify">3. Détection de la grille d'origine</h2>

                {/* Premier paragraphe */}
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Cette section décrit le principe de base de notre projet : coder une méthode qui nous permette de détecter la grille d'origine d'une image compressée en JPEG par le passé (cette dernière n’a plus besoin de l’être) et nous la retourner.
                </p>

                {/* Deuxième paragraphe avec accentuation */}
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Pour cela, nous allons utiliser uniquement la composante luminance de chaque image comme nous l'avons vu précédemment. Une étape importante est alors de déterminer quels sont les coefficients de la DCT qui étaient nuls lors de la compression. En effet, lors de la décompression, une DCT inverse est effectuée sur chaque bloc et une image non compressée est obtenue. Mais les coefficients réels en sortie de la DCT sont parfois arrondis pour pouvoir être affichés par nos écrans, et lorsque l’on recompresse, on n’aura pas forcément 0 tout pile. Pour cela, on mettra un seuil à 0,5. Tout coefficient qui est inférieur à 0,5 sera considéré comme nul et donc remplacé par 0.
                </p>

                {/* Sous-titre */}
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Méthode pour détecter la grille d'origine</h3>

                {/* Explication de la méthode */}
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    La prochaine étape est de déterminer la carte à l'origine de notre compression JPEG. Lors de la première compression, une origine pour toutes les grilles 8x8 est choisie. Le plus souvent, cette origine est (0,0) mais si l'image est ensuite rognée ou collée sur une autre image, ce n'est plus le cas. Nous allons donc rechercher <strong>cette grille d'origine</strong> avec la méthode suivante:
                </p>

                {/* Liste à puces */}
                <ul className="list-disc pl-6 text-gray-700 mb-6 text-justify">
                    <li>Le vote pour un bloc en particulier se fait en votant pour son pixel le plus en haut à gauche possible (son origine).</li>
                    <li>Le vote est stocké sous forme d'un entier entre 0 et 64, représentant les pixels de la grille la plus en haut à gauche de l'image.</li>
                    <li>Si deux blocs ont le même nombre de zéros, le pixel correspondant ne vote pas (-1 dans la carte de vote).</li>
                    <li>Les bordures de l'image sur une largeur de 7 pixels ne votent pas, car ces pixels n'appartiennent pas à 64 blocs, mais à moins.</li>
                </ul>

                {/* Insertion de l'image */}
                <div className="flex justify-center mb-6">
                    <img src="/8x8grids.png" alt="8x8 grids" className="rounded-lg shadow-md w-2/3" />
                </div>

                {/* Remarque importante */}
                <p className="text-gray-700 leading-relaxed italic mb-6 text-justify">
                    <strong>Remarque</strong>: En réalité, ce processus de calcul est extrêmement coûteux en temps et en ressources. Nous utilisons une astuce pour minimiser ces temps de calcul, détaillée plus loin.
                </p>


                {/* Section 4 : Validation Statistique */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-justify">4. Validation Statistique</h2>

                {/* Introduction de la validation statistique */}
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Lors de l’analyse d’une image JPEG, la grille la plus votée correspond probablement à la bonne. Cependant, rien ne garantit que cette grille ne soit beaucoup plus votée que les autres, elle peut l’être par une toute petite marge et n’avoir donc pas grand sens en tant que grille principale. Un critère statistique est donc nécessaire pour décider si cette prédominance est causée par la compression JPEG ou non.
                </p>

                {/* Explication du NFA */}
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    On va donc utiliser un indicateur appelé <strong>NFA</strong>, qui prend appui sur l’hypothèse d’un modèle nul stochastique. En d'autres termes, on va calculer un NFA qui correspond à la probabilité qu'une grille soit votée si tout est aléatoire. Si on est au-dessus d'un seuil, c'est que notre mesure n'est pas suffisamment sûre et on va donc la rejeter. Inversement, plus cette valeur est petite et plus il est probable que la relation ait une interprétation causale.
                </p>

                <MathJax>
                        <p className="text-gray-700 leading-relaxed font-semibold text-center mb-6">
                            {`$$
                            \\begin{align}
                            P(K \\geq k) &= B(n, k, p) \\\\
                            &= \\sum_{j=k}^{n} \\binom{n}{j} p^j (1 - p)^{n - j}
                            \\end{align}
                            $$`}
                        </p>
                </MathJax>


                {/* Explication supplémentaire */}
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Par ailleurs il nous faut prendre en compte d'autres paramètres :
                </p>

                {/* Liste des autres paramètres */}
                <ul className="list-disc pl-6 text-gray-700 mb-6 text-justify">
                    <li>La multiplicité des tests. En effet même si les chances d'obtenir une grille aléatoirement sont faibles, sur plusieurs centaines de milliers de tests, cette probabilité augmente. Nous effectuerons une correction de Bonferroni pour cela.</li>
                    <li>Prendre en compte le fait que les votes sont réalisés dans une fenêtre de taille 8x8.</li>
                </ul>

                {/* Equation du NFA */}
                <MathJax>
                    <p className="text-gray-700 leading-relaxed font-semibold text-center mb-6">
                        {"$$NFA(g, w) = NT \\cdot B\\left(\\frac{|w|}{64}, \\frac{v}{64}, \\frac{1}{64}\\right)$$"}
                    </p>
                </MathJax>

                <ul className="list-disc pl-6 text-gray-700 mb-6 text-justify">
                    <li><strong>|w|</strong> est le nombre total de pixels dans la fenêtre <strong>w</strong>,</li>
                    <li><strong>v</strong> est le nombre total de votes pour <strong>g</strong> dans <strong>w</strong>,</li>
                    <li><strong>NT</strong> est la multiplicité des tests.</li>
                </ul>

                {/* Conclusion sur le seuil */}
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Nous calculerons donc ce NFA pour toutes les fenêtres de l'image. Si ce dernier est supérieur à un seuil <strong>ε</strong> que l’on fixera, alors le vote est considéré comme n'étant pas suffisamment fiable et le pixel est marqué comme non-votant. Nous fixons dans notre cas le seuil à <strong>ε = 1</strong>.
                </p>

                {/* Section 5 : Améliorations */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-justify">5. Améliorations</h2>

                {/* Sous-section 5.1 Blocs Constants */}
                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800 text-justify">5.1 Blocs Constants</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Lorsqu’une image présente des surfaces plutôt floues, cela a tendance, lors de la compression JPEG, à transformer des blocs entiers en blocs unis. En effet, lorsqu'elle est fortement compressée, la zone floue est quantifiée, et un grand nombre des blocs de 8x8 qui étaient presque plats deviennent plats.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Or les régions qui sont constantes selon l’axe X ou Y nous posent problème pour la validation statistique, puisque pour un pixel donné, ce ne sont plus 64 mais beaucoup moins de blocs qui sont différents. Le test statistique pourrait être trompé en considérant comme significatives des configurations qui ne le sont pas. Dans des conditions aléatoires, il s’agirait d’un accident extrêmement rare ; cependant, la tendance du JPEG à créer des blocs constants le long de la direction verticale ou horizontale nécessite de gérer cette situation. 
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Pour cela, on va empêcher les blocs qui vérifient cette propriété de voter, comme on le fait déjà pour les égalités.
                </p>

                {/* Sous-section 5.2 Détection de Falsifications */}
                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800 text-justify">5.2 Détection de Falsifications</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Jusqu’à présent, notre méthode détecte la grille principale de chaque image. Mais si l’on part du principe que la majorité des images manipulées sont passées par un format JPEG un jour ou l'autre, alors si on réalise un montage avec plusieurs images, on devrait pouvoir repérer des grilles différentes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Ainsi, on analyse chaque région avec une grille significative différente de celle principale, ce qui laisse présager une contrefaçon, puisque l'image copiée-collée conserve des traces de sa grille d'origine. Dans 63 cas sur 64 (si les deux grilles ne s'alignent pas par malchance ou si la retouche n'est pas faite volontairement pour brouiller les pistes), on pourra détecter cette région de l'image.
                </p>


                {/* Partie 2 : Pratique */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 text-justify">II. Pratique</h2>

                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">1. Détecter la grille JPEG</h3>

                <FunctionDetail
                    functionName="NFA(nvotes,X,Y)"
                    functionDescription="On réalise une fonction pour calculer le NFA d'une grille. Pour cela il est nécessaire de définir la fonction BinTail qui calcule la somme des probabilités binomiales de 1 à (k-1), somme qu'on va soustraire à 1 pour obtenir la queue de notre probabilité binomiale de k à n. 
                    Ensuite on calcule le NFA à l'aide des dimensions de l'image."
                    functionCode={`def NFA(nvotes, X, Y):\n     p = 1 / 64       \n     n = (X * Y) / 64     \n     nvotes2 = nvotes / 64          \n     result = ((X * Y * 64) ** 2) * BinTail(n, nvotes2, p)        \n     # print("NFA result : {:.20}".format(result))        \n     return result`}
                />

                <FunctionDetail
                    functionName="BinTail(n,k,p)"
                    functionDescription="Défintion de notre fonction qui calcule la queue de notre probabilité binomiale."
                    functionCode={`def BinTail(n, k, p): \n     return 1 - binom.cdf(k - 1, n, p)`}
                />

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    On introduit ensuite la fonction voteMAP. Cette fonction retourne comme on l'a vu plus haut une carte de la même taille que l'image, et contenant 
                    pour chaque pixel son vote pour une des 64 grilles possibles. Pour cela on utilise une petite astuce pour réduire le temps de calcul. Au lieu de balayer 
                    chaque pixel de l'image, et de calculer les 64 blocs possibles on procède différemment.
                </p>

                <FunctionDetail
                    functionName="voteMAP(image)"
                    functionDescription="On balaye chaque bloc de 64 cases de l'image, et pour chaque bloc on réalise la DCT afin d'obtenir le nombre de zéros. 
                    Puis on compare pour chaque pixel de ce bloc si le nombre de zéros par rapports aux blocs précédents. 
                    En d'autres termes, si le pixel à déjà vu passer un bloc avec un plus grand nombre de zéros, on ne fait rien, 
                    mais si c'est le bloc actuel qui semble être optimal alors : 1. On conserve ce nombre maximal de zéros rencontré. 
                    2. On conserve les coordonnées de la grille qui correspond à cet optimum.
                    Ceci permet ainsi de diminuer grandement les calculs. On n'oublie pas à la fin de classifier les bordures de l'image comme non-votant comme il a été précisé plus haut."
                    functionCode={`def voteMAP(image):\n    shape = image.shape\n    X = shape[0]\n    Y = shape[1]\n    votes = np.zeros((X, Y))  # Table des votes
                        \n    zeros = np.zeros((X, Y))  # Table des zeros\n    counter = 0\n    for x in range(X - 7):\n        for y in range(Y - 7):
                        \n            counter += 1\n            z = 0  # Nombre de zeros dans le bloc\n            bloc = image[x:x + 8, y:y + 8, 0]\n            cx = True
                        \n            cy = True\n            for xx in range(8):\n                for yy in range(8):\n                    if bloc[xx, yy] != bloc[xx, 0] and yy != 0:
                        \n                        cx = False\n                    if bloc[xx, yy] != bloc[0, yy] and xx != 0:\n                        cy = False
                        \n            dctblock = dct(dct(bloc.T, norm='ortho').T, norm='ortho') \n            for xx in range(8):\n                for yy in range(8):
                        \n                    if abs(dctblock[xx, yy]) < 0.5:\n                        z += 1  # On compte les zeros\n            for xx in range(x, x + 8):
                        \n                for yy in range(y, y + 8):\n                    if z > 0 and z >= zeros[xx, yy]:\n                        if cx or cy:
                        \n                            votes[xx, yy] = -1\n                        elif z == zeros[xx, yy]:\n                            votes[xx, yy] = -1
                        \n                        else:\n                            zeros[xx, yy] = z\n                            votes[xx, yy] = (x % 8 + y % 8 * 8) 
                        \n    for xx in range(X):\n        for yy in range(7):\n            votes[xx, yy] = -1\n        for yy in range(Y - 7, Y):\n            votes[xx, yy] = -1
                        \n    for yy in range(Y):\n        for xx in range(7):\n            votes[xx, yy] = -1\n        for xx in range(X - 7, X):\n            votes[xx, yy] = -1
                        \n    print(f'Nombre de blocs traités dans voteMAP: {counter}')\n    print('voteMAP terminé')\n    return votes`}
                />

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    La fonction imcolor permets d'afficher une carte des votes plus visuelles, chaque vote correspond à une couleur différente. 
                    Ainsi les pixels de même couleur votent pour une même grille. Nous avons remarqué au cours de notre projet, qu'en visualisant directement la carte des votes nous 
                    avions déja la possibilité de voir en couleur ce que nous souhaitions (chaque pixel ayant un entier comme vote). Néanmoins visualiser de cette manière les images permet 
                    parfois de ne pas distinguer les détails, 2 couleurs pouvant être proches. La fonction imcolor permet ainsi de faire ressortir ces détails comme nous pouvons le voir plus loin.
                </p>

                <FunctionDetail
                    functionName="imcolor(image)"
                    functionDescription="Affichage d'une carte des votes en couleur."
                    functionCode={`def imcolor(image):\n    X = image.shape[0]\n    Y = image.shape[1]\n    color_map = np.random.randint(0, 255, (8, 8), dtype=int)
                        \n    vote_map = voteMAP(image)\n    new_image = np.zeros((X, Y), dtype=int)\n    for x in range(image.shape[0]):\n        for y in range(image.shape[1]):
                        \n            vote = vote_map[x, y]\n            if vote == -1:\n                new_image[x, y] = 0  # les bords et les pixels à -1 sont mis en noir
                        \n            else:\n                colorm = color_map[np.unravel_index(int(vote), (8, 8))]\n                new_image[x, y] = colorm\n    return new_image`}
                />


                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                Enfin, après avoir obtenu, la carte des votes (ou voteMap) nous pouvons ainsi rechercher le
                grillage le plus voté. Il s'agit donc du grillage utilisé pour la compression jpg. C'est la
                fonction detectgrid qui se charge de cette mission.
                </p>


                <FunctionDetail
                    functionName="detectgrid(im)"
                    functionDescription="Cette fonction détecte la grille la plus présente dans l'image en analysant les votes de la fonction voteMAP. 
                    Elle renvoie les coordonnées de la grille ayant obtenu le plus de votes et vérifie si le NFA de cette grille est inférieur à 1. Si le NFA est supérieur à 1, cela signifie qu'aucune grille significative n'a été détectée."
                    functionCode={`def detectgrid(im):  # le but de la fonction est de detecter la grille la plus presente dans l'image et de la renvoyer\n    shape = im.shape\n    X = shape[0]\n    Y = shape[1]\n    votes = voteMAP(im)\n    gridvotes = np.zeros((8, 8))\n    maxvote = 0\n    mostvotedgrid = (0, 0)\n    for x in range(X):\n        for y in range(Y):\n            if isinstance(int(votes[x, y]), int):\n                if int(votes[x, y]) != -1:\n                    gridvotes[np.unravel_index(int(votes[x, y]), (8, 8))] += 1\n                    if gridvotes[np.unravel_index(int(votes[x, y]), (8, 8))] > maxvote:\n                        maxvote = gridvotes[np.unravel_index(int(votes[x, y]), (8, 8))]\n                        mostvotedgrid = np.unravel_index(int(votes[x, y]), (8, 8))\n    NFAv = NFA(maxvote, X, Y)\n    if NFAv < 1:\n        print(f'La grille la plus presente dans l'image est la grille de coordonnees : {mostvotedgrid} avec {maxvote} votes')\n        print(f'Le NFA de cette grille est : {NFAv:.20} ')\n        return mostvotedgrid  # on renvoie la grille la plus presente dans l'image sous forme de tuple (x,y)\n    else:\n        print('Il n'y a pas de grille dans l'image car NFA > 1')\n        return (0, 0), 0`}
                />

                {/* Section 2 : Mise en pratique */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Mise en pratique de ces fonctions sur différents exemples</h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Nous souhaitons pouvoir détecter différentes opérations : le recadrage, et l'ajout d'un élèment auparavant absent sur la photo.
                </p>

                {/* Sous-section A : Le recadrage */}
                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">A. Le recadrage</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Si la grille votée n'est pas associée à (0,0), alors on considère que la photo a été recadrée. Cela signifie que les bords d'origine ont été modifiés.
                    Nous pouvons également observer cela visuellement sur la carte des votes. Dans le cas d'un recadrage, la couleur renvoyée sur la carte des votes est différente de celle de l'originale, indiquant un décalage des grilles JPEG.
                </p>

                {/* Image de la carte des votes après recadrage */}
                <div className="flex justify-center mb-6">
                    <img src="/pelican_color.png" alt="Carte des votes après recadrage" className="rounded-lg shadow-md w-full md:w-2/3" />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Sur la carte des votes ci dessous, nous voyons que la couleur de vote de la grille n'est plus la même que celle de l'image d'origine. 
                    Cela signifie que les blocs de l'image ne sont plus alignés sur la grille JPEG initiale, indiquant qu'un recadrage a probablement eu lieu.
                </p>

                {/* Image de la carte des votes après recadrage */}
                <div className="flex justify-center mb-6">
                    <img src="/pelicancrop_color.png" alt="Carte des votes après recadrage" className="rounded-lg shadow-md w-full md:w-2/3" />
                </div>

                {/* Sous-section B : La Falsification */}
                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">B. La Falsification</h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Nous souhaitons désormais détecter une possible falsification de l'image.
                    Nous allons pour cela retoucher plusieures images, et observer la coloration des grilles trouvées par notre méthode.
                    On devrait observer sur une meme image, plusieures zones de couleurs différentes, correspondant aux zones ayant subi une falsification.
                </p>

                {/* Image de la carte des votes après falsification */}
                <div className="flex justify-center mb-6">
                    <img src="/pelicanmontage_color.png" alt="Carte des votes après falsification" className="rounded-lg shadow-md w-full md:w-2/3" />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    On a très clairement le résultat attendu. Notre image constituée d'un collage des autres, présente des zones de couleurs différentes, 
                    correspondant aux différentes grilles JPEG des images originales.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Mais si ici, la détection était visible à l'oeuil nu, essayons désormais sur une image ou la falsification est plus subtile.
                    On reprend notre image de pelican, mais cette fois si on modifie le ciel de manière imperceptible à l'oeuil nu.
                </p>

                {/* Image de la carte des votes après falsification subtile */}
                <div className="flex justify-center mb-6">
                    <img src="/pelicanmodified_color.png" alt="Carte des votes après falsification subtile" className="rounded-lg shadow-md w-full md:w-2/3" />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    <strong>La méthode est efficace !</strong> On est capable de repérer une image fake, 
                    à la condition que l'une des deux images utilisées pour la falsification ait étée compressée au format JPEG.
                </p>

                {/* Facteur de compression */}
                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">C. Facteur de compression</h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                Nous avons voulu tester notre programme sur plusieures images qui ont subies une falsification, et auxquelles on fait subir une compression de plus en plus forte. 
                Nous utilisons pour cela une image de base : <strong>harry.jpg</strong> et avec notre programme fourni en annexe, nous produisons plusieurs images compressées avec différents facteurs . 
                </p>
                
                <div className="flex justify-center mb-6">
                    <img src="/harry.png" alt="Harry Falsifiée" className="rounded-lg shadow-md w-full md:w-2/3" />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                On va alors observer deux choses :
                    <li>La silhouette de harry potter et la zone falsifiée se dégage de plus en plus du reste de l'image au fur et à mesure que le facteur de compression augmente.</li>
                    <li>Les cotés gauche et droite se lissent de plus en plus, deviennent constant et sont donc classifiées comme non votant et colorés en violet (=noir).</li>
                </p>

                {/* Image de la carte des votes après compression */}
                <div className="flex justify-center mb-6">
                    <img src="/harry_color.png" alt="Carte des votes après compression" className="rounded-lg shadow-md w-full " />
                </div>

                {/* Conclusion */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    Notre méthode est donc capable de détecter une image falsifiée, à condition qu'une des images utilisée pour la falsification ait été compressée au format JPEG. 
                    Nous avons également vu que notre méthode est capable de détecter un recadrage de l'image. 
                    Enfin, nous avons pu observer que notre méthode est sensible au facteur de compression de l'image.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                    <strong>Rappel</strong>: Tous les fichiers nécessaires pour reproduire ces résultats sont disponibles sur le dépôt GitHub associé à ce projet.
                </p>

                <div className="flex justify-center mb-4 mt-2">
                    <a
                        href={project.github}
                        className="inline-block bg-green-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Voir sur GitHub
                    </a>
                </div>


                <p className="text-black font-bold text-2xl mt-10 text-justify flex items-center justify-center">
                    <span className="mr-2 text-2xl">⭐</span> Fin.
                </p>

            </div>    
        </MathJaxContext>
    );
};

export default ProjetJPEG;
