//const timeout = setTimeout(() => {
    //console.log('The text after timeout')
//}, 1500)

//const interval = setInterval(() => {
    //console.log('The text with interval in 1 second')
//}, 1000)

//const delay = (callback, wait = 1000) => {
    //setTimeout((callback) => {}, wait)
//}

//delay(() => {
    //console.log('The text after 1 second')
//}, 1000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Try again')
        }, wait)
    })
    return promise
}

// delay(2000)
//     .then(() => {
//         console.log('The text after 2 seconds by using Promise')
//     })
//     .catch(err => console.error('Error',err))
//     .finally(() => {
//         console.log('Finally')
//     })

const get_data = () => new Promise(resolve => resolve([
    1, 2, 3, 4, 5
]))

// get_data().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(1500)
        const data = await get_data()
        console.log('Data', data)
    } catch(e) {
        console.log(e)
    }
}

asyncExample()