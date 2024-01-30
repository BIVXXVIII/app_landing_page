import { About, Hero, Features, InterfaceSlider, Download, Layout } from 'modules/index'

export default function App() {
    return (
        <Layout>
            <Hero />
            <About />
            <Features />
            <InterfaceSlider />
            <Download />
            <div className="h-[200vh]"></div>
        </Layout>
    )
}