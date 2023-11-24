//GSAP TIMELINE
var tl = gsap.timeline()
tl.from('.navbar',{
    y:-90,
    // duration:1
})
tl.from('.nav-link ul',{
    // opacity:0,
    y:-50,
    display:'none'
    // duration:1
})
tl.from('.nav-link ul a',{
    opacity:0,
    // x:-50,
    scale:2,
    // stagger:1,
    // duration:1
})
tl.from('.nav-logo img',{
    opacity:0,
    y:-100,
    // duration:1
})
tl.from('.nav-actions .contact, .nav-actions .nav-toggler',{
    opacity:0,
    y:-200,
})
tl.from('.jumboturn',{
    opacity:0,
    y:-200,
    
})
tl.from('.section-left',{
    opacity:0,
    y:-200,
    
})
tl.from('.section-left .desgin',{
    opacity:0,
    y:-200,
    
})
tl.from('.section-left .heading',{
    opacity:0,
    x:-300,
})
tl.from('.section-left .heading img',{
    opacity:0,
    x:-300,
    scale:3
})
tl.from('.section-left .heading h1 a',{
    opacity:0,
    x:500,
})
tl.from('.section-left .pera',{
    opacity:0,
    x:500,
    scale:5
})
tl.from('.section-left-footer .footer-left',{
    opacity:0,
    x:-500,
})
tl.from('.section-left-footer .footer-right',{
    opacity:0,
    x:-1000,
})
tl.from('.section-right',{
    opacity:0,
    x:-1000,
})
tl.from('.section-right .image',{
    // opacity:0,
    backgroundColor:'orange',
    x:500
})
tl.from('.section-right .image img',{
    opacity:0,
   scale:3
    
})
tl.from('.section-right .square',{
    opacity:0,
   scale:8
    
})
tl.from('.section-right a',{
    opacity:0,
    x:400
    
})
// tl.from('.btn-text',{
//     y:100,

// })
