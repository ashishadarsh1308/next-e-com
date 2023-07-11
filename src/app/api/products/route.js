import { connect } from '@/backend/config/dbConfig';
import Product from '@/backend/models/product';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { name, description, price, seller, stock, category, images, reviews, ratings } = reqBody;

        const newProduct = new Product({
            name,
            description,
            price,
            seller,
            stock,
            category,
            images,
            reviews,
            ratings,
        });

        const savedProduct = await newProduct.save();

        return NextResponse.json(
            {
                status: 'success',
                message: 'Product saved successfully',
                data: savedProduct,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function GET(request) {
    try {
        // Retrieve all products from the database
        const products = await Product.find({});

        return NextResponse.json(
            {
                status: 'success',
                message: 'Products retrieved successfully',
                products,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

