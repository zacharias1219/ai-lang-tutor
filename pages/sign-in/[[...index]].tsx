import { SignIn } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div className={`w-full flex h-screen items-center justify-between  ${inter.className}`}>
      <div className="w-full h-full flex  justify-center items-end  ">
          <div className=" flex justify-center items-center flex-col w-full h-full bg-gradient-to-r from-indigo-500 to-blue-500 p-12">
              <SignIn  />
          </div>
      </div>
      
    </div>
   
  )
}