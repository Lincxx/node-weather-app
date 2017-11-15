var getUser = (id, callback) => {
    var user = {
        id:id, 
        name: 'Timy'
    };
    setTimeout(() =>{
        callback(user);
    }, 3000)
   
};

getUser(54, (user) => {
    console.log(user);
});