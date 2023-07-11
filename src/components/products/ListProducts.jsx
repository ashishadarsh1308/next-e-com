"use client";

import React from 'react'
import Filters from '../layouts/Filters'
import ProductItem from './ProductItem'
import ProductDetail from './ProductDetails';

const ListProducts = ({ data }) => {
    // console.log(data)
    var products = data.products; // Extract the 'products' array from the data object
    // console.log(products)
    return (
        <div>
            <section className="py-12">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <Filters />
                        <main className="md:w-2/3 lg:w-3/4 px-3">
                            {products.map((product) => (
                                <ProductItem key={product._id} product={product} />
                            ))}
                        </main>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ListProducts
