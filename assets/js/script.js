let $ = document

let clickRight = $.querySelector('#contextMenu')

function contextHandler(event) {

    event.preventDefault();

    if (clickRight.style.display === 'none') {

        clickRight.style.display = 'flex'

        clickRight.style.left = event.pageX + 'px'

        clickRight.style.top = event.pageY + 'px'

    } else {

        clickRight.style.left = event.pageX + 'px'

        clickRight.style.top = event.pageY + 'px'

    }

}

function removeMenu() {

    clickRight.style.display = 'none'

    clickRight.style.removeProperty('left')

    clickRight.style.removeProperty('top')

}

function keyDownHandleer(event) {

    if (event.keyCode === 27) {

        removeMenu();

    }
}

$.body.addEventListener('contextmenu', contextHandler)

$.body.addEventListener('keydown', keyDownHandleer)

$.body.addEventListener('click', removeMenu)