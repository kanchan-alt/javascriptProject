const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeEventClasses()
        panel.classList.add('active')
    })
})


function removeEventClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}