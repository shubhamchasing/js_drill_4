const mapObject = (obj,cb) => {
    
    if(!obj){
        return {};
    }
    let newObj = {};

    for(let key in obj){

        newObj[key] = cb(obj[key],key)

    }
    return newObj
}

module.exports = mapObject