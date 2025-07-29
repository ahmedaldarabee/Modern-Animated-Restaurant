import Banner from "./components/Banner/Banner"
import Hero from "./components/Header/Hero"
import Navbar from "./components/Header/Navbar"
import HotDessert from "./components/HotDessert/HotDessert"
import PopularRecipe from "./components/PopularRecipe/PopularRecipe"

const App = () => {
    return (
        <div className="overflow-hidden bg-wight2">
            <div className="relative overflow-hidden">
                <Navbar/>
                <Hero/>
            </div>
            <HotDessert/>
            <Banner/>
            <PopularRecipe />
        </div>
    )
}

export default App