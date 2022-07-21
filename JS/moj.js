

const boxmenu = document.querySelector('.boxmenu')
const menuwrapper = document.querySelector (".menuwrapper")
const menuwrappercol = document.querySelector(".menuwrappercol")
const hungry = document.querySelector('.hungry')
const hungrynontop = document.querySelector('.hungrynontop')
const block = document.querySelector('.block')
const footeryear = document.querySelector('.footeryear')

const showmenu = () => {
    boxmenu.classList.toggle('boxsquareblock')
    hungry.classList.toggle('hungrynontop')
    document.body.classList.toggle('block')
    
}

burgericonmenu.addEventListener('click', showmenu)


const handleYear = () => {
    const year = (new Date).getFullYear()
    footeryear.innerText = year
}

handleYear()
