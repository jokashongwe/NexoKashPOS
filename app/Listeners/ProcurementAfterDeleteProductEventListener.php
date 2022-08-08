<?php

namespace App\Listeners;

use App\Events\ProcurementAfterDeleteProductEvent;
use App\Services\ProcurementService;
use App\Services\ProviderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ProcurementAfterDeleteProductEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(
        public ProcurementService $procurementService,
        public ProviderService $providerService
    )
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\ProcurementAfterDeleteProductEvent  $event
     * @return void
     */
    public function handle(ProcurementAfterDeleteProductEvent $event)
    {
        $this->procurementService->refresh( $event->procurement_id );
    }
}
