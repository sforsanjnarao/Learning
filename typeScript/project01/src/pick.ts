interface Users{
    id:string;
    email:string //optional
    name:string;
    age:number;
    company:string;
    address:string
} // we can use type too

type userProfile=Pick<Users,'name' | 'age'|'email'>
type userProfileOptional=Partial<userProfile>
function displayUserProfile(users:userProfileOptional){
    console.log(users)
}

displayUserProfile({name:'sanjana'})
