let shareContainer = document.querySelector('.share-container')
let btnContainer = document.querySelector('.btn-container')
let authorInfoContainer = document.querySelector('.author-info-container')
let btn = document.querySelector('.btn')

console.log(shareContainer.parentElement)

window.addEventListener('resize', ()=> {
    console.log('reszing')
    if (window.innerWidth >= 1000) {
        if (authorInfoContainer.contains(shareContainer)){
            console.log('case 1')
            btnContainer.appendChild(shareContainer)
        }
    }else {
        console.log('case 2')
        if(btnContainer.contains(shareContainer)){
            authorInfoContainer.appendChild(shareContainer)
        }
    }
})


btn.addEventListener('click', ()=> {
    shareContainer.classList.toggle('hidden')
})