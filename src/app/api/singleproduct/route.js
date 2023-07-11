import { connect } from '@/backend/config/dbConfig';
import Product from '@/backend/models/product';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request) {
    try {
        const productId = request.params.id;

        const product = await Product.findById(productId);

        if (!product) {
            return NextResponse.json(
                { message: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                status: 'success',
                message: 'Product retrieved successfully',
                product,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
