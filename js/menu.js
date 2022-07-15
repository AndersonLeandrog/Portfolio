window.addEventListener('load', () => {

    //Main Menu
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

    //Page Scroll
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
