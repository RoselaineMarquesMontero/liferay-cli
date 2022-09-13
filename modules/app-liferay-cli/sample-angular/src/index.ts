import './polyfills';

import { UrlResolver } from '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { AppDynamicLoader } from './app/app.dynamic.loader';
import { AppModule } from './app/app.module';
import { AppUrlResolver } from './app/app.url.resolver';
import { LiferayParams } from './types/liferay.params';

/**
 * This is the actual method that initializes the portlet. It is invoked by the 
 * "bootstrap" module.
 * 
 * @param params an object with values of interest to the portlet
 */
export default function(params: LiferayParams) {
	AppUrlResolver.params = params;

	platformBrowserDynamic()
		.bootstrapModule(
			AppModule, 
			{
				providers:[
					// Inject custom AppUrlResolver to resolve static resources
					{
						deps: [],
						provide: UrlResolver, 
						useClass: AppUrlResolver,
					},
				],
			})
		.then((injector: any) => {
			// Load the bootstrap component dinamically so that we can attach it
			// to the portlet's DOM, which is different for each portlet
			// instance and, thus, cannot be determined until the page is
			// rendered (during runtime).
			const dynamicLoader = new AppDynamicLoader(injector);

			dynamicLoader.loadComponent(AppComponent, params);
		})
		.catch(err => console.error(err));
}
