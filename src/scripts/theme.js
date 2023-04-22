/* Desenvolva sua lógica aqui ... */
const themeChange = () => {
    const themeBtn = document.querySelector('.header__theme')
    const html = document.querySelector('html')
    const img = document.createElement('img')
    img.src = '/open-music-base_CarloslFreitas/src/assets/img/moon.svg'
    themeBtn.appendChild(img)

    const themeSave = JSON.parse(localStorage.getItem('dark__mode'))

    if(themeSave){
        img.src = '/open-music-base_CarloslFreitas/src/assets/img/sun.svg'
        html.classList.add('dark__mode')
    }else{
        img.src = '/open-music-base_CarloslFreitas/src/assets/img/moon.svg'
        html.classList.remove('dark__mode')
    }

    themeBtn.addEventListener('click', ()=>{
        html.classList.toggle('dark__mode')

        if(html.classList.contains('dark__mode')){
            img.src = '/open-music-base_CarloslFreitas/src/assets/img/sun.svg'
            localStorage.setItem('dark__mode', true)
        }else{
            img.src = '/open-music-base_CarloslFreitas/src/assets/img/moon.svg'
            localStorage.setItem('dark__mode', false)
        }
    })
}
themeChange()