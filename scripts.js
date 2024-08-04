// scripts.js
function switchLanguage(lang) {
    // Logique pour changer la langue du contenu
    alert('Changement de langue en cours : ' + lang);
}

document.addEventListener('DOMContentLoaded', function() {
    const vignettes = [
        { img: 'path/to/image1.jpg', text: 'Vignette 1' },
        { img: 'path/to/image2.jpg', text: 'Vignette 2' },
        { img: 'path/to/image3.jpg', text: 'Vignette 3' },
        // Ajoutez autant de vignettes que nécessaire
    ];

    const vignetteContainer = document.getElementById('vignettes');
    vignettes.sort(() => 0.5 - Math.random()); // Mélange aléatoire des vignettes

    vignettes.forEach(vignette => {
        const vignetteElement = document.createElement('div');
        vignetteElement.innerHTML = `<img src="${vignette.img}" alt="${vignette.text}"><p>${vignette.text}</p>`;
        vignetteContainer.appendChild(vignetteElement);
    });
});