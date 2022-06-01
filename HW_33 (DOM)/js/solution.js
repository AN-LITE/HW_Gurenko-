'use strict'

void function (){

    const arr1 = [1,2, [2.1,2.2,2.3,2.4] ,3, 4]
    const ulCreate = document.createElement('ul')

    const generList = function (array, element){

        for(let item of array){

            let liCreate = document.createElement('li')

            if(Array.isArray(item)){

                let innerUl = document.createElement('ul')

                liCreate.append(generList(item,innerUl))

            }else{

                liCreate.innerHTML = item
            }
            element.append(liCreate)
        }

        return element;
    }

    const genereteList = generList(arr1,ulCreate);
    document.body.append(genereteList);


}();

