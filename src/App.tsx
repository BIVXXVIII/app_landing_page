import Header from "modules/Header/Header";
import Layout from "modules/Layout/Layout";
import Workzone from "temp/Workzone";


export default function App() {
    return (
        <Layout>
            <Workzone>
                <Header />
            </Workzone>
        </Layout>
    )
}