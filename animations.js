gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// 1. Armazenamos o smoother em uma constante
const smoother = ScrollSmoother.create({
    smooth: 1,
    smoothTouch: 0.1,
    effects: true
});

// 2. Criamos o MatchMedia para gerenciar a responsividade
const mm = gsap.matchMedia();

// Configuração exclusiva para Desktop (telas maiores que 1024px)
mm.add("(min-width: 1025px)", () => {
    // Injeta o efeito de parallax no hero-body via JS
    smoother.effects(".hero-body", { speed: 0.6 });
    
    return () => {
        // Limpa as propriedades injetadas pelo GSAP ao voltar para mobile
        gsap.set(".hero-body", { clearProps: "all" });
    };
});

// --- Suas animações existentes ---

gsap.timeline()
    .from(".hero-title", { y: -20, duration: 2 }, 0)
    .from(".hero-main-img", { y: 40, duration: 2 }, 0);

const tlLogo = gsap.timeline({
    scrollTrigger: {
        trigger: ".brand-reveal-section",
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
    }
});

tlLogo.to(".text-1", { opacity: 0, duration: 0.8, ease: "power2.inOut" }, "+=0.5")
      .from(".text-2", { opacity: 0, duration: 0.8, ease: "power2.inOut" }, "-=0.2")
      .to(".text-2", { opacity: 0, duration: 0.8, ease: "power2.inOut" }, "+=0.5");

tlLogo.to(".reveal-bg", {
    maskSize: "clamp(14rem, 30vw, 36vw)",
    webkitMaskSize: "clamp(14rem, 30vw, 36vw)",
    marginLeft: "8px",
    duration: 3,
    ease: "power2.inOut"
}, "-=0.5")

.to("#header", {
    onStart: () => document.querySelector("#header").classList.add("header-dark"),
    onReverseComplete: () => document.querySelector("#header").classList.remove("header-dark"),
    duration: 0.1
}, "-=0.7")

.to(".reveal-mask", {
    backgroundColor: "#121212",
    duration: 1
}, "-=3");

