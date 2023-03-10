import {Categories, Product, Products} from '../screens/index';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator ();

const ShopNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
      );
    };

    export default ShopNavigator;