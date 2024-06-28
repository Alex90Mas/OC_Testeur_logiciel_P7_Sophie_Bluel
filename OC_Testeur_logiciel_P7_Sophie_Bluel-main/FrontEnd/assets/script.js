//Récupération des travaux depuis l'API
const answer = fetch("http://localhost:5678/api/works");

answer.then((response) => {
    const works = response.json();
    works.then((works) => {

        //Pour parcourrir tous les travaux
        for (let i = 0; i < works.length; i++) {
            //Création et affichage des éléments des travaux
            const work = works[i];
            const figure = document.createElement("figure");
            const imageWork = document.createElement("img");
            imageWork.src = work.imageUrl;
            const nameWork = document.createElement("p");
            nameWork.innerText = work.title;

            //Rattachements aux parents
            const sectionGallery = document.querySelector(".gallery");
            sectionGallery.appendChild(figure);
            figure.appendChild(imageWork);
            figure.appendChild(nameWork);
        }
    })
});