//INTRO ANIMATION JS
const welcomescreen = document.getElementById("welcomeScreen");

welcomescreen.onclick = function() {

    var tl = gsap.timeline();
    tl.set("#curtain", {
        zIndex: 100
    });
    tl.set("#topgraphic", {
        y: -100,
        display: "block"
    });
    tl.to("#topgraphic", { y: 0 });
    tl.to("#topgraphic", { y: 0 });
    tl.to(welcomescreen, 0.5, {
        opacity: 0,
        delay: -0.2
    })
    tl.to(["#main", "#footer"], 0.5, {
        opacity: 1,
        delay: -0.5
    })
    tl.to(welcomescreen, {
            display: "none",
        })
        // Stop endless animation
    gsap.killTweensOf("#clicktocont");
    if (!contextCreated) {
        createContext();
    }
    audio.play()
};

function loadWelcomScreen() {
    const SVG_J = document.getElementById("svgJ");
    const SVG_E = document.getElementById("svgE");
    const SVG_T = document.getElementById("svgT");
    const SVG_S = document.getElementById("svgS");
    const SVG_E2 = document.getElementById("svgE2");
    const SVG_T2 = document.getElementById("svgT2");
    const SVG_R = document.getElementById("svgR");
    const SVG_A = document.getElementById("svgA");
    const SVG_D = document.getElementById("svgD");
    const SVG_I = document.getElementById("svgI");
    const SVG_O = document.getElementById("svgO");
    const SVG_Rspin = document.getElementById("svgRspin");
    const SVG_Ospin = document.getElementById("svgOspin");

    const SVG_limeBG = document.getElementById("limeBG");
    const SVG_whiteBG = document.getElementById("whiteSpace");
    const SVG_greenBG = document.getElementById("darkGreenBG");

    const SVG_logo = document.getElementById("logoSVG");
    const SVG_clicktocont = document.getElementById("clicktocont");

    var tl = gsap.timeline();
    tl.set([SVG_limeBG, SVG_whiteBG, SVG_greenBG, SVG_J, SVG_E, SVG_T, SVG_S, SVG_E2, SVG_T2, SVG_R, SVG_A, SVG_D, SVG_I, SVG_O, SVG_Rspin, SVG_Ospin], {
        opacity: 0,
        x: 100,
        y: 100,
        transformOrigin: '50% 50%'
    }).set([SVG_Rspin, SVG_Ospin], {
        transformOrigin: '50% 50%',
    }).set([SVG_E, SVG_T, SVG_S, SVG_E2, SVG_T2, SVG_A, SVG_I, SVG_O, SVG_Ospin], {
        x: 600,
    }).set([SVG_R, SVG_Rspin], {
        y: 600,
    }).set([SVG_D], {
        x: -600,
    }).set(SVG_clicktocont, {
        opacity: 0
    }).to(SVG_J, 0.5, {
        opacity: 1,
        ease: "power2",
    }).to(SVG_E, 0.4, {
        opacity: 1,
        x: 100,
        ease: "back",
        delay: -0.4
    }).to(SVG_T, 0.3, {
        opacity: 1,
        x: 100,
        ease: "power2",
        delay: -0.1
    }).to(SVG_S, 0.3, {
        opacity: 1,
        x: 100,
        ease: "power2",
        delay: -0.2
    }).to(SVG_E2, 0.2, {
        opacity: 1,
        x: 100,
        ease: "back",
        delay: -0.2
    }).to(SVG_T2, 0.2, {
        opacity: 1,
        x: 100,
        ease: "power2",
        delay: -0.3
    }).to([SVG_R, SVG_Rspin], 0.3, {
        opacity: 1,
        y: 100,
        ease: "power2",
        delay: 0.1
    }).to(SVG_A, 0.2, {
        opacity: 1,
        x: 100,
        ease: "back",
        delay: -0.2
    }).to(SVG_D, 0.4, {
        opacity: 1,
        x: 100,
        ease: "power2",
        delay: 0
    }).to(SVG_I, 0.3, {
        opacity: 1,
        x: 100,
        ease: "power2",
        delay: -0.3
    }).to([SVG_O, SVG_Ospin], 0.3, {
        opacity: 1,
        x: 100,
        ease: "power2",
        delay: -0.2
    }).to(SVG_logo, 0.5, {
        transformOrigin: '50% 50%',
        x: -150,
        scaleX: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power3",
        delay: 0.1
    }).to(SVG_logo, 0.2, {
        transformOrigin: '50% 50%',
        scale: 1.5,
        yoyo: true,
        repeat: 1,
        ease: "power",
        delay: 0
    }).to(SVG_limeBG, 0., {
        opacity: 1,
        delay: 0
    }).to([SVG_Rspin, SVG_Ospin], 1, {
        rotate: 720,
        opacity: 1,
        repeat: 1,
        yoyo: true,
        ease: "back",
        delay: 0
    }).to(SVG_logo, 0.2, {
        transformOrigin: '50% 50%',
        scale: 1.5,
        yoyo: true,
        repeat: 1,
        ease: "power",
        delay: -1.5
    }).to([SVG_whiteBG, SVG_greenBG], 0, {
        opacity: 1,
        delay: -1.1
    }).to(SVG_logo, 0.2, {
        transformOrigin: '50% 50%',
        scale: 1.25,
        ease: "power",
        delay: -1.1
    }).to(SVG_clicktocont, 0.5, {
        opacity: 1,
        ease: "none",
        yoyo: true,
        repeat: -1,
        repeatDelay: 1
    });
}
loadWelcomScreen();

//load inital settings
getStationList()
    .then((res) => loadStationModal(res))
    .catch((err) => console.log(err));

//load inital settings
getStationData("classic")
    .then((res) => setStation(res))
    .catch((err) => console.log(err));