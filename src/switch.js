
var modes = ['light','dark'];

var mode = modes.length;
var body = document.body

var i = 0;

var current = modes[i];

localStorage.getItem('mode')
export default function func(){
    i +=1;
    if(i >1){ i =0; }
    if(i <0) {i =1; body.classList.add('dark');body.classList.remove('light')}
    if(i === 0){body.classList.add('light'); body.classList.remove('dark')}
    if(i === 1){body.classList.add('dark');body.classList.remove('light')}
    current = modes[i]
    console.log(current + i + localStorage.getItem('mode'))
    localStorage.setItem('mode', current)
}