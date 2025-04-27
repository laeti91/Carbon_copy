/*inversion des images*/
if (document.getElementById("picture")){ /*si on se trouve dans la div 'picture'*/
    const pictures = document.getElementById("picture"); /*on récupère l'élément à modifier et on la stock dans une nouvelle variable 'pictures'*/ 
    pictures.addEventListener("click", function() { /*on lui ajoute un écouteur d'évènement au clic de la variable 'pictures'*/
        pictures.classList.toggle("row-reverse"); /*on créer une nouvelle classe pour inversé l'ordre de l'attribut flex-direction*/
    });
}

/*changement du contenu 'contact'*/
if (document.getElementById("contact")){ /*si on se trouve dans la div 'contact'*/
    const input = document.getElementById("name"); /*on crée une variable non-modifiable qui contient l'input*/
    const button = document.getElementById("buttonSubmit"); /*on fait pareil avec le button de validation 'introduice yourself*/

    button.addEventListener("click", function() { /*au clic du bouton de validation de l'input*/
        const name = input.value; /*on récupère la saisie utilisateur dans l'input*/
        const message = `Nice to meet you ${name} 👋`; /*on crée un message de bienvenue avec le nom saisie par l'utilisateur*/
        input.style.display = "none"; /*on cache l'input*/
        button.style.display = "none"; /*on cache le bouton de validation*/
        
        const messageValue = document.createElement("p"); /*on crée un paragraphe à la place de l'input et du bouton pour afficher le message de bienvenue*/
        messageValue.classList.add("message"); /*on lui ajoute une classe 'message' pour le styliser*/
        messageValue.innerHTML = message; /*dans le paragraphe on rajoute le message de bienvenue*/
        messageValue.style.display = "block"; /*on affiche le message*/

        document.getElementById("contact").appendChild(messageValue); /*on rajoute le paragraphe dans la div 'contact'*/

        changeColor(messageValue); /*on démarre le changement de couleur avec le message*/
    });

    function changeColor(paragraph) { /*changement de couleur à intervale en récupérant le nouveau paragraphe créé*/
        const colors = ["var(--text-dark)", "var(--text-light)", "var(--text-dark-version2)", "var(--text-light-version2)"]; /*on crée un tableau de couleur*/
        let index = 0; /*on initialise un index de position dans le tableau à la première couleur*/

        setInterval(function(){ /*on applique un intervalle de temps en bouclant les couleurs du tableau*/
            paragraph.style.color = colors[index]; /*sur le paragraphe je veux appliquer le tableau de couleur*/
            index = (index + 1) % colors.length; /*on incrémente l'index de 1 à chaque fois qu'on change de couleur*/
        },600); /*on applique un intervalle de 1 seconde entre chaque changement de couleur*/
    }
}