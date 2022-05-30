'use strict'

void function (){

    function bindRef(ctx,func){

        return function (){

            func.call(ctx,'Tesla','Model X', 2019,'95000$')

        }

    }

    const myCar = {

        name: 'Toyota',
        model : 'Corolla',
        year : 2008,
        price : '9500$',

    }

    function src (name,model,year,price){
        console.log(`name: ${name} \nmodel: ${model} \nyear: ${year} \nprice: ${price} `);
        console.log(this);
    }

    let pack = bindRef(myCar,src)
    pack();

}();


