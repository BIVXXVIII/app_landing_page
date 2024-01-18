import Header from "modules/Header/Header";
import Hero from "modules/Hero/Hero";
import Layout from "modules/Layout/Layout";
import Workzone from "temp/Workzone";


export default function App() {
    return (
        <Layout>
            {/* <Workzone>
            </Workzone> */}
            <Hero />
            <div className="h-[200vh]"></div>
        </Layout>
    )
}