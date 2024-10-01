const myPromiss = () => {
    return new Promise ((resolve, reject) => {
        const numebr = Math.random() * 10;        
        if(numebr > 5){
            resolve(numebr)
        }
        else{
            reject(numebr)
        }
    })
}

myPromiss()
.then(data => console.log(data))
.catch(err => console.log('can not load data', err))


// fethc data using async

const loadAsyncData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json()
    console.log(data)
}
loadAsyncData()