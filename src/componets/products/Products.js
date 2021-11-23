import React, {useEffect,useState} from "react";

export const ProductList = () => {
    const [products, setProductList] = useState([])
    const [totalProducts, totalProductAmounts] = useState("")

    useEffect(
        () => {
            // table call must be singular in the fetch link in order to properly retrieve objects
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
                .then(res => res.json())
                .then(setProductList)
        },
        []
    )
    return ( 
         <>
        <div>{totalProducts}</div>
        {
            products.map(
                (productObject) => {
                    return <p key={`products--${productObject.id}`}> {productObject.candyName} - Price - ${productObject.price} - Candy Type - {productObject.productType.candyType} </p>;
                }
                )

    }
    </>
    )
    }