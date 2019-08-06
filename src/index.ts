import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/au-notifications')
  ]);

  config.plugin(PLATFORM.moduleName("aurelia-animator-css"));

}

export * from './helpers/au-notification';