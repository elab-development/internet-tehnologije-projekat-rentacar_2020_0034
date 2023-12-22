<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Validator;
use App\Models\Car;
use App\Http\Resources\CarTypeResource;

class CarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID: ' => $this->resource->id,
            'Name: ' => $this->resource->name,
            'Description: '=> $this->resource->description,
            'Image: '=> $this->resource->image,
            'Price: '=> $this->resource->price,
            'Rent time in days: '=> $this->resource->rentTimeInDays,
            'VIN: '=> $this->resource->VIN,
            'Fuel type: '=> $this->resource->fuelType,
            'Gear type: '=> $this->resource->gearType,
            'Properties: '=> $this->resource->properties,
            'Registration: '=> $this->resource->registration,
            'Car Type: '=>new CarTypeResource($this->resource->carType),
        ];
            
    }
}
