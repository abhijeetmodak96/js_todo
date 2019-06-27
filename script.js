
var ul = document.getElementById('list')
var li;

var addbutton = document.getElementById('add');
addbutton.addEventListener('click',additem);

var removebutton = document.getElementById('remove');
removebutton.addEventListener('click',removeitem);

var removeallbutton = document.getElementById('removeall');
removeallbutton.addEventListener('click',removeallitem);


function additem(){
    //console.log("clicked")

    var input = document.getElementById('input') 
    var item = input.value
    var textnode = document.createTextNode(item)

    if(item==="")
    {
        return false
    }else{
        li= document.createElement('li')
        var checkbox = document.createElement('input')
        checkbox.type="checkbox"
        checkbox.setAttribute('id','check')
        var label = document.createElement('label')

        li.appendChild(checkbox)
        li.appendChild(label)
        label.appendChild(textnode)
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(() => {
            li.className = 'visual'
        }, 3);
        input.value=''

    }
}

function removeitem(){
    li = ul.children
    //console.log(li)
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }
}

function removeallitem(){
    li = ul.children
    //console.log(li)
    for (let index = 0; index < li.length; index++) {
        while (li[index]) {
            ul.removeChild(li[index])
        }
        
    }
}