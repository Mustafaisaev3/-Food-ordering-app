
const checkIsInputValue = (inputValue: string, callback: any)  => {
    if (inputValue.length) {
        callback(true)
    } else if (!inputValue.length) {
        callback(false)
    }
}

export default checkIsInputValue