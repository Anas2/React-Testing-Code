import { Box } from "@mui/material";
import Navbar from "../componants/Navbar";
import TodoApp from "../componants/TodoApp";
import Theme from "./Theme";

function About() {


    const arr = [
        {
            name: 'anas',
            age: 23
        },
        {
            name: 'khalid',
            age: 32
        },
        {
            name: 'farhan',
            age: 43
        },
        {
            name: 'anas 11',
            age: 53
        }
    ]

    return (
        <Box>
            <Navbar />
            <h1>  About us</h1>

            <TodoApp />

            <Theme />
        </Box>
    )


}
export default About;