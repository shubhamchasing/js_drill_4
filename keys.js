const keys = (obj) => {

    if(!obj){
        return [];
    }

    let arr = [];

    for(let key in obj){
        arr.push(key);
    }

    return arr;

}

module.exports = keys;

