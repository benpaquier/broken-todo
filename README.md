# Test technique

Ce repo est une app react qui est cassée. Le but de ce test technique est de la réparer afin d'avoir un résultat comme ci-dessous:

![Alt Text](https://miro.medium.com/max/1200/0*GMU8rXe6NYk8bdp9.gif)

1. #### Forker et cloner le repo localement, n'oubliez pas `npm install`

Créer une branche `test`, c'est sur cette branche que vous allez coder. Une fois votre branche `test` créée et pushed, créer une pull request de `test` vers `main`

2. #### Etapes a faire dans l'ordre:
- Fixer l'affichage des tâches définies dans `todo.json`
- Fixer le layout, les tâches devraient s'afficher en colonnes
- Fixer l'ajout d'une tâche / reset du form apres l'ajout de la tache
- Fixer le toggle de la checkbox d'une tâche (au click, cocher ou décocher la tache & barrer le texte)
- Fixer la suppression d'une tâche


3. #### Indices:
- pour le toggle: méthode `findIndex` sur un tableau