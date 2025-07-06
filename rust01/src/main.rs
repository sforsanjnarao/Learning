use std::char;

fn main() {
    println!("Hello, world!");
    let x:i8=20;
    let y:i8=21;
    let z:f64=1000.01;
    println!("x:{}, y:{}, z:{}", x, y, z);

    let is_male:bool=false;
    let is_above_18:bool=true;

    if is_male {
        println!("you are a male")
    } else {
        println!("you are a not a male")
    }

    if is_male && is_above_18 {
        println!("you are an actulle adult")
    }

    let greeting: String= String::from("whole hello world");
    println!("{}", greeting);

    let char1=greeting.chars().nth(5);
    match char1{
        Some(c )=>println!("char1: {}", c),
        None=>println!("no character in this index")
    }

    let char2=greeting.chars().nth(1);
    println!("char2: {}", char2.unwrap());

    // for i in 0..10{
    //     print!(" i:{}", i)
    // }
    let mut m=10;
    m=20;                   //as we know all varables in rust is unmutable in rust and we can make it mutable with use of "mut" 
    println!("{}",m);

    let total_sum=sum(x,y);
    println!("Sum of {} and {} is {}",x,y,total_sum)


}

fn  sum(x:i8,y: i8)->i8 {
    return x+y
}
