/**
 * This is the main.ts file. Import global CSS and scripts here.
 * Learn more: gridsome.org/docs/client-api
 */

/**
 * Types imports
 */
import { ClientApiConstructor } from './types';

/**
 * Global css imports
 */
import '~/assets/css/global.scss';

/**
 * Layout imports
 */
import DefaultLayout from '~/layouts/Default.vue';

/**
 * Client API contructor
 */
const client: ClientApiConstructor = (Vue, { head }) => {
  Vue.component('Layout', DefaultLayout);
  head.title = "SJTU-Plus 学科交流群";
};

export default client;
