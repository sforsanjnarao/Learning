fn main() {
    println!("Hello, world!");
    let x:i8=20;
    let y:i8=21;
    let z:f64=1000.01;
    println!("x:{}, y:{}, z:{}", x, y,z);

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


}
