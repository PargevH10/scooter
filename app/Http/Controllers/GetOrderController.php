<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GetOrderController extends Controller
{
    public function getOrder(Request $request)
    {
        return 'success!';
    }
}
