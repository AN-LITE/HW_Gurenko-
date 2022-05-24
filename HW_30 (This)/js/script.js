'use strict'

function bindRef(ctx,func){

    return function (){
        func.call(ctx)
    }

}

const myCar = {

    name: 'Toyota',
    model : 'Corolla',
    year : 2008,
    price : '9500$',

}

function src (){

    console.log(this);
}

let pack = bindRef(myCar,src)
pack();






// const newCar = {

//     name: 'Tesla',
//     model : 'X',
//     year : 2019,
//     price : '95000$',

//     infoCar : function (){

//         console.group(`${this.name} info`)
//         console.log(`Name is ${this.name}`);
//         console.log(`Model is ${this.model}`);
//         console.log(`Year is ${this.year}`);
//         console.log(`price is ${this.price}`);
//         console.groupEnd();

//     }   
// }


// const myCar = {

//     name: 'Toyota',
//     model : 'Corolla',
//     year : 2008,
//     price : '9500$',

// }


// newCar.infoCar();
// newCar.infoCar.bind(myCar)();
