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

    sr.reveal('.text-reveal');
    sr.reveal('.sequence', { interval: 300, viewFactor: 0.6});
    sr.reveal('.sequence-a', { interval: 300, viewFactor: 0});
    sr.reveal('.img-reveal', { viewFactor: 0.3 })
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

  window.addEventListener('message', function (event) {

    // Need to check for safety as we are going to process only our messages
    // So Check whether event with data(which contains any object) contains our message here its "FrameHeight"
   if (event.data == "FrameHeight") {

        //event.source contains parent page window object 
        //which we are going to use to send message back to main page here "abc.com/page"

        //parentSourceWindow = event.source;

        //Calculate the maximum height of the page
        var body = document.body, html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

       // Send height back to parent page "abc.com/page"
        event.source.postMessage({ "FrameHeight": height }, "*");       
    }
    console.log("Sent message");
});