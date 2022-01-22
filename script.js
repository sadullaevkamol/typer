class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.element)
        this.top = obj.top

        this.element.style.position = 'fixed';

        this.element.style.top = this.scroll()

        this.unit = obj.unit

        window.addEventListener('scroll', () => this.scroll())
    }


    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.element.clientHeight
        }
    }

    calc(height, top) {
        return height / 100 * top;
    }

    scroll() {
        this.window = this.scrollNumber()

        if (this.window - scrollY > 0) {
            this.element.style.top = this.window - scrollY + 'px';
        } else {
            this.element.style.top = 0
        }
    }
}

const myScroll = new Scroll(
    {
        element: '.header__nav',
        top: 100
    }
)

class Hover {
    constructor(item) {
        this.element = document.querySelector(item)

        this.element.addEventListener('mouseover', () => {
            this.mover()
        })
    }

    mover() {
        this.element.style = `
            margin-top: ${this.random(1, 800)}px;
            margin-left: ${this.random(1, 1500)}px;
            transition: 0.5s;
        `
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}

let myHover = new Hover('.header__content')

const hBtns = document.querySelectorAll('.header__nav-btn');
const hMenu = document.querySelector('.header__menu')


hBtns.forEach(hBtn => {
    hBtn.addEventListener('click', () => {
        hMenu.classList.toggle('active')
    })
})


// class Burger{
//     constructor(obj) {
//         this.button = document.querySelectorAll(obj.buyton)
//         this.menu = document.querySelector(obj.menu)


//         this.button.forEach(item => {
//             item.addEventListener('click', () => {
//                 this.menu.classList.toggle('active')
//             })
//         })
//     }
// }

// const myBurger = new Burger({
//     button: '.header__nav-btn',
//     menu: '.header__menu'
// })