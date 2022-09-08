import Carousel from "./Carousel/Carousel"
import Categories from "./Categories/Categories"
import Featured from "./Featured/Featured"
import Offer from "./Offer/Offer"
import Products from "./Products/Products"
import Vendor from "./Vendor/Vendor"


const Home = () => {
    return(
        <>
        <Carousel />
        <Featured />
        <Categories />
        <Products />
        <Offer />
        <Vendor />
        </>
    )
}
export default Home