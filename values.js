const values = (obj) => {

    if(!obj){
        return [];
    }

    let arr = [];
    let value;
    for(let key in obj){
        value = obj[key]
        if(typeof(value) === 'function'){
            continue;
        }

        arr.push(value);
    }
    return arr;
}

module.exports = values;