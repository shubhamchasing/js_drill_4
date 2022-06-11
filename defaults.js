const defaults = (obj, defaultProps) =>{

    if (!defaultProps){
        if(!obj){
         return {};
        }
        else{
            console.log("a")
            return obj;
        }
     }

     for(let key in defaultProps){
     
         if(!obj[key]){
           // console.log("x")
             obj[key] = defaultProps[key];
         }
     }
     return obj; 
 
    }

module.exports = defaults;
