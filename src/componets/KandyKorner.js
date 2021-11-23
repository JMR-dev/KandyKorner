import { LocationsList } from "./locations/Locations"
import { ProductList } from "./products/Products"

export const KandyKorner = () => {
    return(
    <>
    <h1>Kandy Korner</h1>
    <h2>Locations</h2>
    <LocationsList />
    <h2>Products</h2>
    <ProductList />
    </>
)
}