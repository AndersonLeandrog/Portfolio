var script = document.createElement('script')
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script)

window.addEventListener('load', () => {

    //Menu
    let click = 0
    const t = 180
    $("#menu").click(() => {
        click++
        if(click === 1) {
            $('nav').fadeIn(t)
            $('#menu img').attr('src', 'img/voltar.png')
        } else {
            click = 0
            $('nav').fadeOut(t)
            $('#menu img').attr('src', 'img/menu.png')
        }
    })

    $(window).resize(() => {
        window.innerWidth >= 1024? $('nav').show() : null
    })

    const icones = document.querySelectorAll("img")

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
}) 
