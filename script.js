var tl = gsap.timeline()
tl.to("img",{
    backgroundColor: "DarkOrange"
})
tl.from("img",{
    scale:0,
    rotate:720,
    duration:1,
    
})
tl.to("h1",{
    x:600,
    duration:2,
})
tl.to("img",{
    x: 505,
    duration: 3,
    rotate:360,
    backgroundColor: "blue"
})
tl.to("h2",{
    y:-250,
    duration:1,
    color:"Navy",
    stagger: 1
    
})
tl.to("p",{
    y:-250,
    duration:3,
    color:"black"
})
tl.to("h1",{
    y:-83,
    x:-2,
    duration:2,
    backgroundColor: "orange",
    borderRadius: "50%",
})
tl.to("li",{
    y:-250,
    duration:3,
    stagger:-0.2,
})
gsap.to("img",{
    y:270,
    delay:15,
    duration:2,
    rotate:360
})
tl.to("img",{
    x:-30,
    duration:1.5,
    rotate:0,
    scale:0.5,
    backgroundColor: "PaleTurquoise",
   
})
tl.to("img",{
    x: -240,
    duration:1,
    scale:0.6,
    repeat: -1,
    yoyo: true,
})
tl.to("li",{
    opacity:0,
    delay:1,
    duration:4,
    x:50,
    stagger:1,
    repeat:-1,
    scrollTrigger:{
        trigger:"li",
        start: "Top 80%",
        end: "Top 40%",        
    }})
