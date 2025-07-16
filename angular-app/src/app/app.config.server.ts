import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { LucideAngularModule, Cloud, Brain, Layers, Mail, Phone } from 'lucide-angular';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    importProvidersFrom(LucideAngularModule.pick({ Cloud, Brain, Layers, Mail, Phone }))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
