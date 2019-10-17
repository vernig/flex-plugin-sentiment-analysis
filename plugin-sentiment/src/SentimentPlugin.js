import React from 'react';
import { FlexPlugin } from 'flex-plugin';

const PLUGIN_NAME = 'SentimentPlugin';

export default class SentimentPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

  }
}
