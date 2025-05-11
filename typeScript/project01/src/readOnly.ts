interface config{
    readonly endpoint:string;
    readonly apiURL:string
}

const Config:config={
    endpoint:"lalala",
    apiURL:'bababa'
}
                    //OR

// interface config{
//     endpoint:string;
//     apiURL:string
// }

// const Config:Readonly<config>={
//     endpoint:"lalala",
//     apiURL:'bababa'
// }
//now we can chage the value pf any object
