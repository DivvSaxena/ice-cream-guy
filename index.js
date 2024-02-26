let aboutMeEl = document.getElementById('about-me')
let treatsEl = document.getElementById('treats')
let locationEl = document.getElementById('location')

function scrollFunctionOne(){
    aboutMeEl.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
}

function scrollFunctionTwo(){
    treatsEl.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
}

function scrollFunctionThree(){
    locationEl.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
}