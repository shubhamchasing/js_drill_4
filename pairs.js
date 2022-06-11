const pairs = (obj) => {

    if(!obj){
        return [];
    }
    let array = [];

    for(let key in obj){
        array.push([key,obj[key]])
    }

    return array

}

module.exports = pairs;