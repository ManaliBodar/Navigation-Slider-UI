// bring all images and list items

const Contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')


// add eventlistener on item 

listItems.forEach((item ,idx) =>{
    item.addEventListener('click' ,() =>{
        hideAllContent()
        hideAllItems()

        item.classList.add('active')
        Contents[idx].classList.add('show')
    })
})

function hideAllContent()
{
    Contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems()
{
    listItems.forEach(item => item.classList.remove('active'))
}