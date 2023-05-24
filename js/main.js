'use strict';

{
    const targets = document.querySelectorAll('.fadein')
    window.addEventListener('scroll',()=>{
        targets.forEach(target => {

            const fade = target.getBoundingClientRect().top + target.clientHeight*0.2

            if(window.innerHeight > fade){
                target.style.opacity='1'
                target.style.transform='translateY(0)'
            }

        })

    })
}
