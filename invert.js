const invert = (obj) => {

    if(!obj){
        return {};
    }
    let newObj = {};
    let value;

    for(let key in obj){
        value = obj[key]
      //  console.log(value)
        if(typeof(value) !== 'string'){

            value = JSON.stringify(value);
        }

        newObj[value] = key
    }

    return newObj

}

module.exports = invert