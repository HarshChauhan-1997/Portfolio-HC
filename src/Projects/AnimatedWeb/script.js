import { gsap } from "gsap";

var curs = document.querySelector(".cursor");
var blur = document.querySelector(".cursorblur");
document.addEventListener("mousemove",function(dets){
    curs.style.left = dets.x+"px";
    curs.style.top = dets.y+"px";
    blur.style.left = dets.x - 250 +"px";
    blur.style.top = dets.y - 250 +"px";
})

gsap.to(".cursor", {
    delay: 2
})
gsap.to(".nav", {
    height: 90,
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 0.5
    }
})
gsap.to (".main",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        screen: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from ("#about,#img1,#img2",{
    y: 50,
    opacity:0,
    duration:0.8,
    stagger: 0.4,
    scrollTrigger: {
        scroller: "body",
        trigger:"#about",
        start:"top 60%",
        end:"top 55%",
        scrub: 2,
    }
})

gsap.from ("#card1,#card2,#card3",{
    scale: 0.9,
    opacity:0,
    scrollTrigger: {
        scroller: "body",
        trigger:"#cards",
        start:"top 70%",
        end:"top 65%",
        scrub: 0,
    }
})

gsap.from ("#coma1",{
    x: -150,
    y: -150,
    duration: 2,
    scrollTrigger: {
        scroller: "body",
        trigger:"#coma1",
        start:"top 80%",
        end:"top 75%",
        scrub: 8,
    }
})

gsap.from ("#coma2",{
    x: 150,
    y: 150,
    duration: 4,
    scrollTrigger: {
        scroller: "body",
        trigger:"#coma1",
        start:"top 80%",
        end:"top 75%",
        scrub: 9,
    }
})





