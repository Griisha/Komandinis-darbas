export default class Card{
    constructor({ salis, info, paveikslelis, atlikejas, daina }){
        this.salis = salis
        this.info = info
        this.paveikslelis = paveikslelis
        this.atlikejas = atlikejas
        this.daina = daina
        return this.render()
    }
    render(){
        const div = document.createElement('div')
        div.classList.add('div')
        const papildomas = document.createElement('div')
        papildomas.classList.add('papildomas')

        const img = document.createElement('img')
        img.setAttribute('src', this.paveikslelis)
        papildomas.append(img)
        const atlikejas = document.createElement('h1')
        const atlikejasText = document.createTextNode(this.atlikejas)
        atlikejas.append(atlikejasText)
        const salis = document.createElement('h2')
        const salisText = document.createTextNode(this.salis)
        salis.append(salisText)
        const button = document.createElement('i')
        button.setAttribute('class', 'bi bi-info-circle')
        div.append(papildomas, atlikejas, salis, button)
        return div;
    }
}