let shareContainer = document.querySelector('.share-container')
let btnContainer = document.querySelector('.btn-container')
let authorInfoContainer = document.querySelector('.author-info-container')
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
    shareContainer.classList.toggle('hidden')
})

putSharecontainerToProperParent()