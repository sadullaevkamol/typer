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

// const hBtns = document.querySelectorAll('.header__nav-btn');
// const hMenu = document.querySelector('.header__menu')


// hBtns.forEach(hBtn => {
//     hBtn.addEventListener('click', () => {
//         hMenu.classList.toggle('active')
//     })
// })

// setTimeout(() => {
    
// }, timeout);

class Burger {
    constructor(obj) {
        this.button = document.querySelectorAll(obj.button)
        this.menu = document.querySelector(obj.menu)


        this.button.forEach(item => {
            item.addEventListener('click', () => {
                this.menu.classList.toggle('active')
            })
        })
    }
}

const myBurger = new Burger({
    button: '.header__nav-btn',
    menu: '.header__menu'
})

const title = document.querySelector('h1')

const text = [
    title.innerHTML
];

let line = 0;
let count = 0;
let result = '';
function typeLine() {
    setTimeout(
        () => {
            result += text[line][count]
            title.innerHTML = result + '|';
            count++;
            if (count >= text[line].length) {
                count = 0;
                line++;
            }
            typeLine();
        }, 200)
}
typeLine();

// class Type {
//     constructor(element) {
//         this.title = document.querySelector(element);
//         this.text = [this.title.innerHTML];
//         this.line = 0;
//         this.count = 0;
//         this.result = '';
//     }

//     timeout() {
//         setTimeout(() => {
//             this.typeLine
//         }, 200);
//     }

//     typeLine() {
//         this.result += this.text[this.line][this.count]
//         this.title.innerHTML = this.result + '|'
//         this.count++
//         if( this.count >= this.text[this.line].length) {
//             this.count = 0;
//             this.line++
//         }
//     }
// }

// const myType = new Type('h1')