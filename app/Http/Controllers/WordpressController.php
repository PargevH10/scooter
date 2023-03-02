<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductSupplier;
use App\Models\ProductVariant;
use Illuminate\Database\QueryException;

class WordpressController extends Controller
{
    public function getFromSite()
    {
        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://www.doctorscooter.co.uk/wp-json/wc/v3/products?per_page=100&page=8&oauth_consumer_key=ck_7d343a1c14f2619c8fbd7f97b97588099dd02591&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1677756153&oauth_nonce=dkc002KkNtn&oauth_version=1.0&oauth_signature=RfDWEmWntea4sSLrVR5BXXe84BY%3D',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ]);

        $products = curl_exec($curl);

        curl_close($curl);
        $products = json_decode($products, true);

        foreach ($products as $product) {
            if (Product::where('slug', Product::createSlug($product['name']))->count() > 0) {
                continue;
            }
            $p = new Product();
            $p->id = $product['id'];
            // $p->code = $product['Barcode'];
            $p->name = $product['name'];
            $p->slug = Product::createSlug($product['name']);
            $p->description = $product['description'];
            $p->cost = $product['price'];
            $p->price = $product['price'];
            $p->out_price = $product['price'];
            // // $p->category_id = $product['CategoryID'];
            // $p->Type_barcode = $product['Barcode'];
            // $p->tax_rate_id = $product['TaxRateID'];
            // $p->eat_out_tax_rate_id = $product['EatOutTaxRateID'];
            // $p->brand_id = $product['BrandID'];
            // $p->popup_note_id = $product['PopupNoteID'];
            // $p->unit_of_sale = $product['UnitOfSale'];
            // $p->volume_of_sale = $product['VolumeOfSale'];
            // $p->multi_choice_id = $product['MultiChoiceID'];
            // $p->colour_id = $product['ColourID'];
            // $p->size = $product['Size'];
            $p->sku = $product['sku'];
            $p->image = $product['image'] ?? 'no-image.png';
            // $p->sell_on_web = $product['SellOnWeb'];
            // $p->order_code = $product['OrderCode'] ?? true;
            // $p->button_colour_id = $product['ButtonColourID'];
            // $p->sort_position = $product['SortPosition'];
            // $p->magento_attribute_set_id = $product['MagentoAttributeSetID'];
            // $p->r_r_price = $product['RRPrice'];
            // $p->cost_price_tax_rate_id = $product['CostPriceTaxRateID'];
            // $p->product_type = $product['type'];

            $p->unit_id = 1;
            $p->unit_sale_id = 1;
            $p->unit_purchase_id = 1;
            $p->stock_alert = 0;

            // $p->tare_weight = $product['TareWeight'];
            // $p->article_code = $product['ArticleCode'];
            $p->save();

            $s = new ProductSupplier();
            $s->supplier_id = $product['parent_id'];
            $s->product_id = $product['id'];
            $s->save();

            $v = new ProductVariant();
            //                    $v->id = $product['VariantGroupID'];
            $v->product_id = $product['id'];
            $v->name = $product['name'];
            $v->save();
        }

        return 1;
    }
}
