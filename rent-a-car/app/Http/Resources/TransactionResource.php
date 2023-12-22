<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            'DATE: '=> $this->resource->date,
            'STATUS: '=> $this->resource->status,
            'USER WHO RENTS: '=> new UserResource($this->resource->user),
            'RENTAL AGENT WHO PUT UP A CAR FOR RENT: '=>  new RentalAgentResource($this->resource->rentalAgent),
            'CAR THAT IS THE MAIN POINT OF THIS TRANSACTION: '=>  new CarResource($this->resource->car),
        ];
    }
}
