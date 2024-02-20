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
        button.addEventListener("click", () => {
            const modalas = document.createElement('dialog')
            const mygtukas = document.createElement('button')
            modalas.classList.add('modal')
            mygtukas.setAttribute('class','bi bi-door-closed')
            const daina = document.createElement('h2')
            const dainaText = document.createTextNode(`Song: ${this.daina}`)
            daina.append(dainaText)
            const paragrafas = document.createElement('p')
            const paragrafasText = document.createTextNode(this.info)
            paragrafas.append(paragrafasText)
            modalas.append(mygtukas,daina,paragrafas)
            document.querySelector('main').append(modalas)  
            modalas.showModal()
            mygtukas.addEventListener('click', ()=>{
                modalas.remove()
            })
        })


        div.append(papildomas, atlikejas, salis, button)
        return div;
    }
}

