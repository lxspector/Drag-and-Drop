const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(()=>{event.target.classList.add('hide')},0)
    
}

function dragend(event) {
    // event.target.classList.remove('hold', 'hide') // обращается к объекту у которого есть метод
    event.target.className = 'item' // работает со строкой
}

function dragover(event) {
    event.preventDefault()
    

}

function dragenter(event) {
    event.target.classList.add('hovered')
   
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    event.target.classList.remove('newPlace')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.classList.add('newPlace')
    event.target.append(item)
    
}