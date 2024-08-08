let shareContainer = document.querySelector('.share-container')
let btnContainer = document.querySelector('.btn-container')
let authorInfoContainer = document.querySelector('.author-info-container')
let mainContent = document.querySelector('.main-content')
let btn = document.querySelector('.btn')

function putSharecontainerToProperParent(){
    if (window.innerWidth >= 1000) {
        if (authorInfoContainer.contains(shareContainer)){
            btnContainer.appendChild(shareContainer)
        }
    }else {
        if(btnContainer.contains(shareContainer)){
            authorInfoContainer.appendChild(shareContainer)
        }
    }
}

window.addEventListener('resize', ()=> {
    putSharecontainerToProperParent()
})

btn.addEventListener('click', ()=> {
    mainContent.classList.toggle('hidden')
})

putSharecontainerToProperParent()