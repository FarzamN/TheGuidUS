/**
 * @format
 */

import App from './App';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import {CustomToast} from './src/components';
import Toast from 'react-native-toast-message';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { PaperProvider} from 'react-native-paper';

const Root = () => {
//   const theme = {
//     ...MD2LightTheme,
//     fonts: configureFonts({config, isV3: false}),
//   };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <PaperProvider>
            <App />
            {/* <Toast
              config={{
                success: props => <CustomToast {...props} />,
                error: props => <CustomToast {...props} />,
              }}
            /> */}
          </PaperProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);