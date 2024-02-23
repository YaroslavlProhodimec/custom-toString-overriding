
<div id={'app'}></div>



obj.__proto__.toString = function (){
    return this.prop
}

console.log(typeof obj.toString())

const el = document.getElementById('app')
el.innerText = obj
