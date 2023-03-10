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
    const sr = ScrollReveal( {viewFactor: 0.4, delay: 100} );

    //general
    sr.reveal('.text-reveal');
    sr.reveal('.sequence', { interval: 300, viewFactor: 0.6});
    sr.reveal('.sequence-a', { interval: 300, viewFactor: 0});
    sr.reveal('.img-reveal', { viewFactor: 0.3 });

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
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    console.log("Nav track active");
    const sections = document.querySelectorAll('section');
    const controlItems = document.querySelectorAll('.control-item');

    const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach((entry, index) => {
        if(entry.isIntersecting){
            sections.forEach((section, index) =>{
                if (section.id == entry.target.id){
                    controlItems[index].classList.add('active');
                }
            });
            // console.log(entry.target.id);
            // console.log(entry.intersectionRatio);
        }
        else {
            sections.forEach((section, index) =>{
                if (section.id == entry.target.id){
                    controlItems[index].classList.remove('active');
                    }
                });
            }
        });
    }, {threshold: 0.4});

    sections.forEach(section => {
        observer.observe(section);
    });
  }else{
    console.log("script disabled");
  }

//   Scroll Reveal Animation
