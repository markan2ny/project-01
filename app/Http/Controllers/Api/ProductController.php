<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    public function store(ProductRequest $request)
    {
        Product::create($request->validated());

        return response()->json($request);
    }

    public function show($product)
    {
        // $p = DB::table('products')
        //     ->select('product_name')
        //     ->where('id', $product)
        //     ->get();
        $p = Product::find($product);
        return new ProductResource($p);
    }
}
