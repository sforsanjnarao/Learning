import { NavBar } from "@/component/NavBar";

export default function AuthLayout({children}){
    return(
        <div>
            <NavBar/>
            {children}

        </div>
    )
}