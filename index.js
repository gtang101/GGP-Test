// Add class text-reveal to all the child within text-content-container class
const textContainer = document.querySelectorAll(".text-content-container, .special-case-text");
		
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
    const sr = ScrollReveal( {viewFactor: 0.6, delay: 100} );

    sr.reveal('.text-reveal');
    sr.reveal('.sequence', { interval: 500, viewFactor: 1});
    sr.reveal('.sequence-a', { interval: 500, viewFactor: 0});
    sr.reveal('.img-reveal', {viewFactor: 0.3})
    console.log("ScrollReveal");
}

// On load
window.onload = () => {
    console.log("Loading");
    $(".loader").fadeOut("slow");
    addTextReveal();
    $(".text-reveal, .sequence, .sequence-a, .img-reveal").addClass('load-hidden');
    scrollRevealStart();
    console.log("Loaded");
};

// Track where on the page