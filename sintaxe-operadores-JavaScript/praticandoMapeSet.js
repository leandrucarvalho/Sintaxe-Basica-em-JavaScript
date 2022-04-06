/* function getAdmins(map) {
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }

    return admins;
}

const users = new Map();

users.set('Leandro', 'Admin');
users.set('Junior', 'User');
users.set('Rafael', 'Admin');
users.set('Jorger', 'Admin');


console.log(getAdmins(users)); */

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    
    return [...mySet];
}

console.log(valoresUnicos(meuArray));

