import CartNavigator from './cart';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { THEME } from '../constants/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: THEME.colors.background,
        tabBarInactiveTintColor: THEME.colors.background,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
