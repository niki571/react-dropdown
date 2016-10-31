import $ from 'jquery'
import Promise from 'promise'

export default {
    fetch: function(url,method,parms){
        let promise = new Promise(function (resolve, reject) {
            $.ajax({
                method: method,
                url:url,
                data:(!parms?{}:parms)
                }).done(resolve).fail(reject);
        });
        return promise;
    },

    descToVal: function(data){
        let newData = data.map((item) => {
        	let newItem = {};
            for(let key in item){
            	if(key == 'description'){
                    newItem.value = item.description;
            	}else{
            		newItem[key] = item[key];
            	}
            }
            return newItem;
        });
        return newData;
    }
}