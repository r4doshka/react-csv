import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  path : '/home',
  getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
          and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
            dependencies for bundling   */
        const HomeView = require('./components/HomeView/HomeView').default
        const reducer = require('./modules/home').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'industry_shown', reducer })

        /*  Return getComponent   */
        cb(null, HomeView)

      /* Webpack named bundle   */
      }, 'HomeView')
    }
});