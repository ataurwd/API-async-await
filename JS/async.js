const asyncData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}


const asyncError = async() => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.log('data nor found');
    }
}