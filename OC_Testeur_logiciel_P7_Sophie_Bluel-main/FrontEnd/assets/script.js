//Pour attendre le chargement de la page HTML avant de lancer le script (TypeError: Cannot read properties of null (reading 'addEventListener'))
document.addEventListener("DOMContentLoaded", function () {
    let works = [];

    //Récupération des travaux depuis l'API
    async function getWorks() {
        const response = await fetch("http://localhost:5678/api/works");
        works = await response.json();
        console.log(works);
        showWorks(works);
    }
    getWorks();

    //Création des éléments travaux
    function showWorks(works) {
        for (let i = 0; i < works.length; i++) {
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
    }

    //Tri avec les boutons
    const buttonAll = document.querySelector(".btn-all");
    buttonAll.addEventListener("click", function () {
        showWorks(works);
    });

    const buttonObj = document.querySelector(".btn-obj");
    buttonObj.addEventListener("click", function () {
        const workObj = works.filter(function (work) {
            return work.categoryId === 1;
        })
        console.log(workObj);
        // Efface le contenu de la balise body et donc l’écran
        document.querySelector(".gallery").innerHTML = '';
        showWorks(workObj);
    });

    const buttonApt = document.querySelector(".btn-apt");
    buttonApt.addEventListener("click", function () {
        const workApt = works.filter(function (work) {
            return work.categoryId === 2;
        })
        console.log(workApt);
        document.querySelector(".gallery").innerHTML = '';
        showWorks(workApt);
    });

    const buttonHr = document.querySelector(".btn-hr");
    buttonHr.addEventListener("click", function () {
        const workHr = works.filter(function (work) {
            return work.categoryId === 3;
        })
        console.log(workHr);
        document.querySelector(".gallery").innerHTML = '';
        showWorks(workHr);
    });
});