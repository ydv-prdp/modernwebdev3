gsap.to(".imagecontainer",{
        width:'100%',
        ease:Expo.easeInOut,
        duration: 2,
        stagger:2,
        repeat:-1
    
    })
    gsap.to(".text h1", {
        ease:Expo.easeInOut,
        stagger:2,
        top:0

    })
    gsap.to(".text h1", {
        ease:Expo.easeInOut,
        delay:2,
        stagger:2,
        top:"100%"

    })