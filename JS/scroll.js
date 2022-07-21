const burgericonmenu = document.querySelector('.burgericonmenu')
const burgericonmenuwhite = document.querySelector ('.burgericonmenuwhite')


let root = document.documentElement;

const scrollBar = () => {
    const scroll = window.scrollY
    

    const lefttoScroll = document.body.getBoundingClientRect().height - window.innerHeight
    
    const scrollWidth = Math.floor((scroll/lefttoScroll) *100)

    root.style.setProperty('--scroll-width', `${scrollWidth}%`)


    if (scrollWidth  > 6 && scrollWidth < 58) {
        burgericonmenu.classList.add('burgericonmenuwhite')
    } 

    else if (scrollWidth > 106) {
        burgericonmenu.classList.add('burgericonmenuwhite')
    }

    else if (scrollWidth > 442) {
        burgericonmenu.classList.remove('burgericonmenuwhite')
    }

    else {
        burgericonmenu.classList.remove('burgericonmenuwhite')
    }
  
}



const up = () => {
    window.scroll({
           
        top:0

        
           
    })
   }
   


    window.addEventListener('scroll', scrollBar)
    burgericonmenu.addEventListener('click', up)
    