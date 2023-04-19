/* Desenvolva sua lógica aqui ... */
const renderAlbum = list =>{
    const albumList = document.querySelector('.album__list')
    albumList.innerHTML = ''

    list.forEach(item => {
        albumList.appendChild(createAlbumItem(item))
    });
}
const createAlbumItem = item =>{
    const li = document.createElement('li')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const div = document.createElement('div')
    const p = document.createElement('p')
    const span = document.createElement('span')
    const h2 = document.createElement('h2')
    const div2 = document.createElement('div')
    const p2 = document.createElement('p')

    li.classList = 'album__item'
    p.classList = 'album__artist-band font3'
    span.classList = 'album__release font3'
    h2.classList = 'album__name font2'
    p2.classList = 'album__value font2'

    img.src = item.img
    p.innerText = item.band
    span.innerText = item.year
    h2.innerText = item.title
    p2.innerText = `R$ ${item.price.toFixed(2)}`

    li.append(figure, div)
    figure.appendChild(img)
    div.append(p, h2, div2)
    p.appendChild(span)
    div2.append(p2, btnBuy(item))
    
    return li
}
const btnBuy = item =>{
    const buttonBuy = document.createElement('button')
    buttonBuy.innerText = 'Comprar'
    buttonBuy.id = item.id
    // buttonBuy.addEventListener('click', (e)=> {
    //     console.log(e.target)
    // })
    return buttonBuy
}
// -----------------------------------------------------------------------
const renderGenderButtons = genderList => {
    const listGenderBtn = document.querySelector('.gender__buttons')

    genderList.forEach(genderBtn => {
        listGenderBtn.appendChild(createGenderButtons(genderBtn))
    })
}

const createGenderButtons = gender => {
    const ListGender = categories
    const li = document.createElement('li')
    const label = document.createElement('label')
    const radio = document.createElement('input')
    li.classList = 'gender-btn__item'

    label.innerText = gender
    radio.type = 'radio'
    radio.name = 'teste'
    radio.type = 'hidden'
    console.log()

    const findIndexGender = ListGender.findIndex(gender => gender === label.innerText)
    label.htmlFor = findIndexGender
    radio.id = findIndexGender
    
    // li.addEventListener('click', ()=> {
    //     ListGender.forEach(item =>{
    //         if(label.innerText == item){
    //             li.classList.add('clicked')
    //             console.log(item ,gender)
    //         }else if(label.innerText != item){
    //             li.classList.remove('clicked')
    //         }
    //     })
    // })


    li.append(label, radio)

    return li
}

renderAlbum(products)
renderGenderButtons(categories)
