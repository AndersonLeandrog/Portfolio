window.addEventListener('load', () => {

    //darkmode
    let click = 0
    let setTheme = false

    $('.box-dark').click(() => {
        click++
        if(click === 1) {
            document.querySelector('.darkImg').animate([
                { transform: 'rotate(180deg)' }
              ], {
                duration: 200,
                iterations: 1,
                fill: 'both'
            })

            //black, darkmode
            setTheme = true
            $('#habilidades, #formacao, #projetos, #contato').css('background', '#212121')
            $('.icone img').css('filter', 'invert(0)')
            $('.icone, p').css('color', '#fff')

            $('.box-hab .hab-items, #formacao .descricao, .box-proj p').css('background', '#2b2b2b')
            $('.box-hab .hab-items, #formacao .descricao').css('border', '1px solid #171717')
            $('.hab-items h1, .hab-items li').css('color', '#fff')
            $('.box h5, .box p, .box span').css('color', '#fff')

            $('#sobre .descricao p').css('color', 'silver')
        } else {
            click = 0
            document.querySelector('.darkImg').animate([
                { transform: 'rotate(0deg)' }
              ], {
                duration: 200,
                iterations: 1,
                fill: 'both'
            })

            //white, darkmode
            setTheme = false
            $('#habilidades, #formacao, #projetos, #contato').css('background', '#dcdcdc')
            $('.icone img').css('filter', 'invert(1)')
            $('.icone, p').css('color', '#000')

            $('.box-hab .hab-items, #formacao .descricao, .box-proj p').css('background', '#c0c0c0')
            $('.box-hab .hab-items, #formacao .descricao').css('border', '1px solid #a9a9a9')
            $('.hab-items h1, .hab-items li').css('color', '#000')
            $('.box h5, .box p, .box span').css('color', '#000')

            $('#sobre .descricao p').css('color', 'silver')
        }
    })

    //Cards hover
    $('.box-hab ul').mouseover(function() {
        $(this).css('background', '#5049d7')
    })

    $('.box-hab ul').mouseout(function() {
        if(setTheme) {
            $(this).css('background', '#2b2b2b')
        } else {
            $(this).css('background', '#c0c0c0')
        }
    })
}) 
