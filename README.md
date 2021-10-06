Ce projet a été amorcé avec Create React Native App .

Vous trouverez ci-dessous des informations sur l'exécution des tâches courantes. La version la plus récente de ce guide est disponible ici .

Table des matières
Mise à jour vers de nouvelles versions
Scripts disponibles
npm début
test npm
npm exécuter ios
npm exécuter Android
npm exécuter éjecter
Écriture et exécution de tests
Variables d'environnement
Configuration de l'adresse IP du conditionneur
Personnalisation du nom d'affichage et de l'icône de l'application
Partage et déploiement
Publication dans la communauté native React d'Expo
Créer une application "autonome" pour l'Expo
Éjection de Create React Native App
Créer des dépendances (Xcode et Android Studio)
Dois-je utiliser ExpoKit?
Dépannage
La mise en réseau
Le simulateur iOS ne s'ouvre pas
Le code QR ne scanne pas
Mise à jour vers de nouvelles versions
Vous ne devriez avoir besoin de mettre à jour l'installation globale que create-react-native-apptrès rarement, idéalement jamais.

La mise à jour de la react-native-scriptsdépendance de votre application doit être aussi simple que de remplacer le numéro de version package.jsonet de réinstaller les dépendances de votre projet.

Mise à niveau vers une nouvelle version de React native nécessite la mise à jour des react-native, reactet les expoversions de paquet, et le réglage de la correcte sdkVersiondans app.json. Consultez le guide de gestion des versions pour obtenir des informations à jour sur la compatibilité des versions des packages.

Scripts disponibles
Si Yarn a été installé lorsque le projet a été initialisé, alors les dépendances auront été installées via Yarn, et vous devriez probablement l'utiliser pour exécuter ces commandes également. Contrairement à l'installation de dépendances, la syntaxe d'exécution de la commande est identique pour Yarn et NPM au moment de la rédaction de cet article.

npm start
Exécute votre application en mode développement.

Ouvrez-le dans l' application Expo sur votre téléphone pour l'afficher. Il se rechargera si vous enregistrez les modifications apportées à vos fichiers, et vous verrez des erreurs de construction et des journaux dans le terminal.

Parfois, vous devrez peut-être réinitialiser ou effacer le cache du packager React Native. Pour ce faire, vous pouvez transmettre l' --reset-cacheindicateur au script de démarrage:

npm start --reset-cache
# or
yarn start --reset-cache
npm test
Exécute le jest test runner sur vos tests.

npm run ios
Comme npm start, mais tente également d'ouvrir votre application dans le simulateur iOS si vous êtes sur un Mac et que vous l'avez installée.

npm run android
J'aime npm start, mais tente également d'ouvrir votre application sur un appareil ou un émulateur Android connecté. Nécessite une installation des outils de construction Android (voir la documentation React Native pour une configuration détaillée). Nous vous recommandons également d'installer Genymotion comme émulateur Android. Une fois que vous avez terminé de configurer l'environnement de construction natif, il existe deux options pour rendre la bonne copie de adbdisponible pour Create React Native App:

Utilisation d'Android Studio adb
Assurez-vous que vous pouvez exécuter adb depuis votre terminal.
Ouvrez Genymotion et accédez à Settings -> ADB. Sélectionnez «Utiliser les outils SDK Android personnalisés» et mettez à jour avec votre répertoire SDK Android .
Utilisation de Genymotion adb
Trouvez la copie de Genymotion de adb. Sur macOS par exemple, c'est normalement /Applications/Genymotion.app/Contents/MacOS/tools/.
Ajoutez le répertoire des outils Genymotion à votre chemin (instructions pour Mac , Linux et Windows ).
Assurez-vous que vous pouvez exécuter adb depuis votre terminal.
npm run eject
Cela lancera le processus d '«éjection» des scripts de construction de Create React Native App. On vous posera quelques questions sur la manière dont vous souhaitez créer votre projet.

Attention: l' exécution de l'éjection est une action permanente (indépendamment du système de contrôle de version que vous utilisez). Une application éjectée nécessitera la configuration d'un environnement Xcode et / ou Android Studio .

Personnalisation du nom d'affichage et de l'icône de l'application
Vous pouvez modifier app.jsonpour inclure des clés de configuration sous la expoclé.

Pour modifier le nom d'affichage de votre application, définissez la expo.nameclé dans app.jsonune chaîne appropriée.

Pour définir une icône d'application, définissez la expo.iconclé app.jsond'entrée comme étant un chemin local ou une URL. Il est recommandé d'utiliser un fichier png de 512x512 avec transparence.

Écriture et exécution de tests
Ce projet est configuré pour utiliser jest pour les tests. Vous pouvez configurer la stratégie de test de votre choix, mais la plaisanterie fonctionne immédiatement. Créez des fichiers de test dans des répertoires appelés __tests__ou avec l' .testextension pour que les fichiers soient chargés par jest. Voir le projet de modèle pour un exemple de test. La documentation de plaisanterie est également une ressource merveilleuse, tout comme le didacticiel de test React Native .

Variables d'environnement
Vous pouvez configurer certains des comportements de Create React Native App à l'aide de variables d'environnement.

Configuration de l'adresse IP du conditionneur
Lorsque vous démarrez votre projet, vous verrez quelque chose comme ceci pour l'URL de votre projet:

exp://192.168.0.2:19000
Le "manifeste" à cette URL indique à l'application Expo comment récupérer et charger le bundle JavaScript de votre application. Ainsi, même si vous la chargez dans l'application via une URL telle que exp://localhost:19000, l'application cliente Expo essaiera toujours de récupérer votre application à l'adresse IP. fourni par le script de démarrage.

Dans certains cas, c'est loin d'être idéal. Cela peut être le cas si vous devez exécuter votre projet à l'intérieur d'une machine virtuelle et que vous devez accéder au packager via une adresse IP différente de celle qui s'imprime par défaut. Afin de remplacer l'adresse IP ou le nom d'hôte détecté par Create React Native App, vous pouvez spécifier votre propre nom d'hôte via la REACT_NATIVE_PACKAGER_HOSTNAMEvariable d'environnement:

Mac et Linux:

REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
Les fenêtres:

set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
npm start
L'exemple ci-dessus amènerait le serveur de développement à écouter exp://my-custom-ip-address-or-hostname:19000.

Partage et déploiement
Create React Native App fait beaucoup de travail pour rendre la configuration et le développement d'applications simples et directs, mais il est très difficile de faire de même pour le déploiement sur l'App Store d'Apple ou le Play Store de Google sans compter sur un service hébergé.

Publication dans la communauté native React d'Expo
Expo fournit un hébergement gratuit pour les applications JS uniquement créées par CRNA, vous permettant de partager votre application via l'application cliente Expo. Cela nécessite une inscription pour un compte Expo.

Installez l' expoutil de ligne de commande et exécutez la commande de publication:

$ npm i -g exp
$ exp publish
Créer une application "autonome" pour l'Expo
Vous pouvez également utiliser un service comme les versions autonomes d'Expo si vous souhaitez obtenir un IPA / APK pour la distribution sans avoir à créer vous-même le code natif.

Éjection de Create React Native App
Si vous souhaitez créer et déployer votre application vous-même, vous devrez vous éjecter de CRNA et utiliser Xcode et Android Studio.

C'est généralement aussi simple que d'exécuter npm run ejectvotre projet, ce qui vous guidera tout au long du processus. Assurez-vous d'installer react-native-cliet de suivre le guide de démarrage du code natif pour React Native .

Dois-je utiliser ExpoKit?
Si vous avez utilisé les API Expo tout en travaillant sur votre projet, ces appels d'API cesseront de fonctionner si vous vous éjectez vers un projet React Native standard. Si vous souhaitez continuer à utiliser ces API, vous pouvez vous éjecter vers "React Native + ExpoKit" qui vous permettra toujours de créer votre propre code natif et de continuer à utiliser les API d'Expo. Consultez le guide d'éjection pour plus de détails sur cette option.

Dépannage
La mise en réseau
Si vous ne parvenez pas à charger votre application sur votre téléphone en raison d'un délai d'expiration du réseau ou d'une connexion refusée, une bonne première étape consiste à vérifier que votre téléphone et votre ordinateur sont sur le même réseau et qu'ils peuvent se joindre. Create React Native App doit accéder aux ports 19000 et 19001.Assurez-vous donc que les paramètres de votre réseau et de votre pare-feu autorisent l'accès de votre appareil à votre ordinateur sur ces deux ports.

Essayez d'ouvrir un navigateur Web sur votre téléphone et d'ouvrir l'URL imprimée par le script du packager, en remplaçant exp://par http://. Ainsi, par exemple, si sous le code QR de votre terminal, vous voyez:

exp://192.168.0.1:19000
Essayez d'ouvrir Safari ou Chrome sur votre téléphone et chargez

http://192.168.0.1:19000
et

http://192.168.0.1:19001
Si cela fonctionne, mais que vous ne parvenez toujours pas à charger votre application en scannant le code QR, veuillez ouvrir un problème dans le référentiel Create React Native App avec des détails sur ces étapes et tout autre message d'erreur que vous avez pu recevoir.

Si vous ne parvenez pas à charger l' httpURL dans le navigateur Web de votre téléphone, essayez d'utiliser la fonction de partage de connexion / point d'accès mobile sur votre téléphone (attention à l'utilisation des données, cependant), connectez votre ordinateur à ce réseau WiFi et redémarrez le conditionneur. Si vous utilisez un VPN, vous devrez peut-être le désactiver.

Le simulateur iOS ne s'ouvre pas
Si vous êtes sur un Mac, il y a quelques erreurs que les utilisateurs voient parfois lorsqu'ils tentent de npm run ios:

"code de sortie différent de zéro: 107"
"Vous devrez peut-être installer Xcode" mais il est déjà installé
et d'autres
Il y a quelques étapes que vous souhaiterez peut-être suivre pour résoudre ces types d'erreurs:

Assurez-vous que Xcode est installé et ouvrez-le pour accepter le contrat de licence s'il vous y invite. Vous pouvez l'installer depuis le Mac App Store.
Ouvrez les Préférences de Xcode, l'onglet Emplacements, et assurez-vous que l' Command Line Toolsoption de menu est définie sur quelque chose. Parfois, lorsque les outils CLI sont installés pour la première fois par Homebrew, cette option est laissée vide, ce qui peut empêcher les utilitaires Apple de trouver le simulateur. Assurez-vous de recommencer npm/yarn run iosaprès cela.
Si cela ne fonctionne pas, ouvrez le simulateur et, dans le menu de l'application, sélectionnez Reset Contents and Settings.... Une fois que cela est terminé, quittez le simulateur et relancez npm/yarn run ios.
Le code QR ne scanne pas
Si vous ne parvenez pas à scanner le code QR, assurez-vous que l'appareil photo de votre téléphone se concentre correctement et assurez-vous également que le contraste des deux couleurs de votre terminal est suffisamment élevé. Par exemple, les thèmes par défaut de WebStorm peuvent ne pas avoir un contraste suffisant pour que les codes QR des terminaux puissent être scannés avec les scanners de codes-barres système utilisés par l'application Expo.

Si cela vous pose des problèmes, vous pouvez essayer de changer le thème de couleur de votre terminal pour avoir plus de contraste ou d'exécuter Create React Native App à partir d'un autre terminal. Vous pouvez également saisir manuellement l'URL imprimée par le script du packager dans la barre de recherche de l'application Expo pour la charger manuellement.

## Epitech

Web@cadémie
