// Add class text-reveal to all the child within text-content-container class
const textContainer = document.querySelectorAll('.text-content-container');

function addTextReveal(){
    for (let i = 0; i < textContainer.length; i++){
        const current = textContainer[i];
        for (const el of current.children){
            el.classList.add('text-reveal');
        }
    }
    console.log("Add text-reveal class to all elements under text-content-container");
};

// Scroll Reveal
function scrollRevealStart(){
    const sr = ScrollReveal( {reset: true} );

    sr.reveal('.text-reveal');
    console.log("ScrollReveal");
}

// On load
window.onload = () => {
    console.log("Loading");
    $(".loader").fadeOut("slow");
    addTextReveal();
    $('.text-reveal').addClass('load-hidden');
    scrollRevealStart();
    console.log("Loaded");
};