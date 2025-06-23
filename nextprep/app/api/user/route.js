import { NextResponse } from "next/server";

 export function GET(){
    return NextResponse.json({
        name:"",
        email:"sanjna@gmail.com"
    })
 }

 export function POST(){
    NextResponse.json({
        name:"",
        email:""
    })
 }