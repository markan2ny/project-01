<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        $product = DB::table('products')->select('product_name')->get();
        return response()->json($product);
    }

    public function store(ProductRequest $request)
    {
        Product::create($request->validated());

        return response()->json($request);
    }

    public function update($id)
    {
        $product = DB::table('products')->where('id', $id)->first();
        return response()->json($product);
    }
}
