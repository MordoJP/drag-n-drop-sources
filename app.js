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

function dragstart (e) {
    e.target.classList.add('hold')
    e.target.innerHTML = 'Тащи'
    setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragend (e) {
    e.target.classList.remove('hold', 'hide')
    e.target.innerHTML = 'Перетащи меня'
}

function dragover (e) {
    e.preventDefault()
}

function dragenter (e) {
    e.target.classList.add('hovered')
}

function dragleave (e) {
    e.target.classList.remove('hovered')
}

function dragdrop (e) {
    e.target.classList.remove('hovered')
    e.target.append(item)
    position(e.target)
}

function position (placeholder) {
    if (placeholder === placeholders[0]){
        changeStatus('starting')
    } else if (placeholder === placeholders[1]){
        changeStatus('in-process')
    } else {
        changeStatus('finished')
    }
}

function changeStatus (style) {
    item.className = 'item'
    item.classList.add(style)
}

position(placeholders[0])
