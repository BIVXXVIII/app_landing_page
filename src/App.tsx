import About from "modules/About/About";
import Hero from "modules/Hero/Hero";
import Layout from "modules/Layout/Layout";


export default function App() {
    return (
        <Layout>
            {/* <Workzone>
            </Workzone> */}
            <Hero />
            <About />
            <div className="h-[200vh]"></div>
        </Layout>
    )
}