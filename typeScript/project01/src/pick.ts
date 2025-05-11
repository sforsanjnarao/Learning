interface Users{
    id:string;
    email:string
    name:string;
    age:number;
    company:string;
    address:string
}

type userProfile=Pick<Users,'name' | 'age'|'email'>
function displayUserProfile(users:userProfile){
    //any thing over here
}

