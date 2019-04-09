export default (value) => {
    const size = `${window.screen.width / value}px`

    document.documentElement.style.fontSize = size

    window.onresize = () => {
        const newSize = `${window.screen.width / value}px`

        document.documentElement.style.fontSize = newSize
    }
}
