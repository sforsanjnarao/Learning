interface TodoType{
    title:string;
    disc:string;
    done:boolean
}
interface TodoInput{
    todo:TodoType;
}
function Todo({todo}:TodoInput){
    return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.disc}</h2>
    </div>
}
