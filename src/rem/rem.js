export default (value)=>{
    document.documentElement.style.fontSize = window.screen.width / value + 'px'
    window.onresize = ()=>{
        document.documentElement.style.fontSize = window.screen.width / value + 'px'
    }
}