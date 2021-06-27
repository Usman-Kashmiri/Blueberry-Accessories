var myVar = setTimeout(showPage, 4000);

function showPage() {
    document.getElementById("pre-loader").style.display = "none";
    document.getElementById("page").style.display = "block";
}

gsap.from('#pre-loader', { backgroundColor: "white", delay: 2, duration: 1 });
gsap.from('.berry', { opacity: 0, delay: 0.2, duration: 0.8, y: -100, stagger: 0.6 });
gsap.from('.leaves', { scale: 0, delay: 1.8, duration: 0.8, x: 165, ease: "back.out(1.5)" });
gsap.from('.tittle', { opacity: 0, delay: 2.6, duration: 0.8, x: -120 });