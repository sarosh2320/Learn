<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
      
        if($this->isMethod('get')) {
            return [
            'name' => 'string',
            'price' => 'numeric|min:0|max:999999.99',
            'date' => 'date|nullable',
            'brand' => 'string|nullable',
            'pageNum' => 'sometimes|integer|min:1',
            'pageSize' => 'sometimes|integer|min:1',
            ];
        }
             // Rule for create and update method
        else  {
            return [

                'name' => 'string',
                'price' => 'numeric|min:0|max:999999.99',
                'date' => 'date|nullable',
                'barcode_symbology' => 'string|nullable',
                'brand_id' => 'nullable|integer',
                'category_id' => 'required|integer',
                'is_batch' => 'boolean|nullable',
                'cost' => 'required|string',
                'qty' => 'double|nullable',
                'alert_quantity' => 'double|nullable',
                'promotion' => 'required|boolean',
                'promotion_price' => 'nullable|string',
                'starting_date' => 'date|nullable',
                'last_date' => 'date|nullable',
                'image' => 'nullable|longtext', 
                'featured' => 'nullable|boolean',
                'product_details' => 'nullable|string', 
                'is_active' => 'nullable|boolean',
                'stripe_product_id' => 'nullable|string', 
                'stripe_price_id' => 'nullable|string', 
                'discount' => 'required|numeric|min:0',
                'pageNum' => 'sometimes|integer|min:1',
                'pageSize' => 'sometimes|integer|min:1',
            ];
        }
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'status_code' => 422,
            'message' => $validator->errors(),
            'data'    => []
        ], 422));
    }
}