// object destructuring
    const users= {
        id:34,
        namehome:"munnna",
       address:{
home:"dhaka",
area:"moinarbag"
       },
       contact:32432,

    }


const {namehome:newHome,address:home}=users // destructure and name alias

// array destructuring

const myFriends= ['korim','rohim','jabbar','motin','rahat']
const [,,realFriend,...rest]=myFriends