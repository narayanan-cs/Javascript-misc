function addDragEventListener(el)
{
    console.log(el);
el.addEventListener('drag',(e)=>{
    console.log(e.target)
e.target.clientX = event.clientX
e.target.clientY = event.clientY
})
}

