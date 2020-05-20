<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function all()
    {
        return Order::all();
    }

    public function single($id)
    {
        return Order::where('id', '=', $id)->with('dishes')->first();
    }

    public function create(Request $request)
    {
        $order = Order::create([
            'comment' => $request->get('comment') ? $request->get('comment') : '',
            'date' => date('Y-m-d')
        ]);

        foreach ($request->get('order') as $key => $value) {
            $order->dishes()->attach($value['id'], ['amount' => $value['amount']]);
            $order->save();
        }

        return Order::where('id', '=', $order->id)->with('dishes')->first();
    }
}
