import { Injectable } from '@angular/core';
import { CoreMainMenuHandler, CoreMainMenuHandlerData } from '@features/mainmenu/services/mainmenu-delegate';
import { makeSingleton } from '@singletons';
import { AddonFees } from './fees-routing.module'; // Adjust the path accordingly


/**
 * Handler to inject a Fee option into the main menu.
 */
@Injectable({ providedIn: 'root' })
export class AddonFeesMainMenuHandlerService implements CoreMainMenuHandler {

    name = 'AddonFees';
    priority = 1;

    /**
     * @inheritdoc
     */
    async isEnabled(): Promise<boolean> {
        return AddonFees.isPluginEnabled(); // Check if fees plugin is enabled
    }

    /**
     * @inheritdoc
     */
    getDisplayData(): CoreMainMenuHandlerData {
        return {
            icon: 'american-football', // Icon for the Fee section
            title: 'Sample', // Translation key for the Fee section title
            page: "AddonFees", // Page name for the Fee section
            class: 'addon-fees-handler', // Add a custom class
        };
    }

}

export const AddonFeesMainMenuHandler = makeSingleton(AddonFeesMainMenuHandlerService);
