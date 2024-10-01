const product = {
    name: 'school bag',
    price: 400,
    weight: '500gm',
    productColor: ['red', 'yellow', 'green', 'blue'],
    productSize:{
        x: 500,
        xl: 600
    }
}

const productJson = JSON.stringify(product);
console.log(productJson);
const convertObject = JSON.parse(productJson)
console.log(convertObject);
