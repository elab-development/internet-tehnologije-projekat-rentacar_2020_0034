<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RentalAgentResource extends JsonResource
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
            'Rental agent name: '=> $this->resource->name,
            'city: '=> $this->resource->city,
            'Address: '=> $this->resource->address,
            'Email: '=> $this->resource->email,
            'Telephone: '=> $this->resource->telephone,
        ];
    }
}
