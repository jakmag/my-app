import { useContext } from "react"
import { LevelContext } from "./LevelContext"


const TestLabPage = () => {

    // ({children}: { children: React.ReactNode })

    const Section =  ({children}: {children: React.ReactNode }) => {

        const level = useContext(LevelContext)

        return (
            <section>
                <LevelContext value={level + 1}>
                    {children}
                </LevelContext>
            </section>
        )
    }


    const Heading =  ({children}: {children: React.ReactNode }) => {

        const level = useContext(LevelContext)

        return (
            <h1>{children} {level}</h1>
        )
    }





    return (
        <div>
            <Section>
                <Heading>h</Heading>              
                <Heading>h</Heading>              
                <Heading>h</Heading>              
                <Heading>h</Heading>
                <Section>             
                    <Heading>h</Heading>              
                    <Heading>h</Heading>              
                    <Heading>h</Heading>              
                    <Heading>h</Heading>
                </Section>           
            </Section>    

        </div>
    )
}


export default TestLabPage;