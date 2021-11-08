//teste de commit
//teste 1 de commit
const icones = document.querySelectorAll("img")

function load() {    

    //Imagem de proejetos
    const projeto = document.querySelectorAll(".projeto");
    for(let i = 0; i < projeto.length; i++) {
        
        projeto[i].style.backgroundRepeat='no-repeat'

        switch(i) {
            case 0:
                projeto[i].style.backgroundImage="url(img/droid.png)"
                break;

            case 1:
                projeto[i].style.backgroundImage="url(img/pomo.png)"
                break;

            case 2:
                projeto[i].style.backgroundImage="url(img/react.png)"
                break;

            case 3:
                projeto[i].style.backgroundImage="url(img/patting.png)"
                break;

            default:
                alert('Não foi possível encontrar as imagens de projetos.')
        }
    }

    //scroll da Página
    const menuItems = document.querySelectorAll('.menu a[href^="#"]')
    function getScrollTopByHref(element) {
        const id = element.getAttribute('href')
        return document.querySelector(id).offsetTop
    }

    function scrollToPosition(to) {
        window.scroll({
            top: to,
            behavior: "smooth",
        })
    }

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.currentTarget)- 150
        scrollToPosition(to)
    }

    menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)
    })
}

window.addEventListener("load", load)