import { ActivityIndicator, View } from 'react-native';

import AppNavigator from './navigation';
import { styles } from "./styles";
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      });

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    );
  }
  return <AppNavigator  />;
};



export default App; 