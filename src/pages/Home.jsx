import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import Main from "../components/home/Main"

export default function Home(){

        return <>
                <Navbar/>
                <Main/>
                <Footer/>
        </>
}