// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { CoreSharedModule } from '@/core/shared.module';
import { CoreLoginMethodsComponent } from './login-methods/login-methods';
import { CoreLoginExceededAttemptsComponent } from '@features/login/components/exceeded-attempts/exceeded-attempts';
import { CoreLoginIdentityProviderComponent } from './identity-provider/identity-provider';

@NgModule({
    declarations: [
        CoreLoginExceededAttemptsComponent,
        CoreLoginMethodsComponent,
    ],
    imports: [
        CoreSharedModule,
        CoreLoginIdentityProviderComponent,
    ],
    exports: [
        CoreLoginExceededAttemptsComponent,
        CoreLoginMethodsComponent,
    ],
})
export class CoreLoginComponentsModule {}
