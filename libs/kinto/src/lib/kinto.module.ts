import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  NgxKintoOptions,
  NgxKintoService,
  NGX_KINTO_OPTIONS,
} from './services/kinto.service';

@NgModule({
  imports: [CommonModule],
})
export class NgxKintoModule {
  static forRoot(
    options: NgxKintoOptions
  ): ModuleWithProviders<NgxKintoModule> {
    return {
      ngModule: NgxKintoModule,
      providers: [
        { provide: NGX_KINTO_OPTIONS, useValue: options || {} },
        NgxKintoService,
      ],
    };
  }

  static forChild(
    options?: NgxKintoOptions
  ): ModuleWithProviders<NgxKintoModule> {
    return {
      ngModule: NgxKintoModule,
      providers: [NgxKintoService],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: NgxKintoModule) {
    /* if (parentModule) {
      throw new Error(
        'NgxKintoModule already loaded. Import in root module only.'
      );
    } */
  }
}