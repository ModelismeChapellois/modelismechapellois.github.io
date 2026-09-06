/* --- MENU BURGER --- */
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.style.display = (links.style.display === 'flex') ? 'none' : 'flex';
}

/* --- GALERIE DYNAMIQUE --- */
/*
    Dossiers à parcourir :
    images/pistes/buggy
    images/pistes/crawler
    images/pistes/drone
    images/pistes/indoor
    images/pistes/modele
*/

const folders = [
    "buggy",
    "crawler",
    "drone",
    "indoor",
    "modele"
];

// Nombre maximum d’images à tester par dossier
const maxImages = 200; // tu peux augmenter si tu veux

function loadGallery() {
    const gallery = document.getElementById("gallery");
    if (!gallery) return; // si on n'est pas sur galerie.html → on ne fait rien

    folders.forEach(folder => {
        for (let i = 1; i <= maxImages; i++) {

            // Chemin complet vers les images
            const img = new Image();
            img.src = `../images/pistes/${folder}/${folder}${i}.jpg`;
            img.className = "gallery-photo";

            // Si l'image existe → on l'ajoute
            img.onload = () => gallery.appendChild(img);
        }
    });
}

// On lance la galerie
loadGallery();


//gestion navbar
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const path = window.location.pathname.includes("/pages/")
        ? "../header.html"
        : "header.html";

    fetch(path)
        .then(response => response.text())
        .then(data => {
            navbar.innerHTML = data;
        });
});


// ===============================
// Pixel FeedPulse (tracking global)
// ===============================

(function(){
    function g(){
        try{
            var i = new Image();
            var t = (document.title || '').slice(0,160);
            i.src = 'https://feed-pulse.com/api/track-pixel/b4581b97-b5a5-456d-a47b-7dd6cf6d2e47?path=' +
                encodeURIComponent(location.pathname || '/') +
                '&title=' + encodeURIComponent(t) +
                '&host=' + encodeURIComponent(location.host) +
                '&ref=' + encodeURIComponent(document.referrer || '');
        } catch(e){}
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', g, { once: true });
    } else {
        setTimeout(g, 80);
    }
})();


