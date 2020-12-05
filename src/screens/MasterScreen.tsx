import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { StarSelected } from '@src/components/StarSelected';
import { StarAnimation } from '@src/components/StarAnimation';

const starImage = require('../assets/star-shadows.png');

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const MasterScreen = (props: Props) => {

    useEffect(() => {

    }, []);

    const onMenuPress = () => {
        console.log(props.navigation.state);// { key: 'Home', routeName: 'Home' }
        console.log("Menu pressed");
        props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    const onButtonPress = () => {
        const pushAction = StackActions.push({
            routeName: 'Stack1',
            params: {
                myUserId: 9,
            },
        });

        props.navigation.dispatch(pushAction);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue',
            }}>

                <StarAnimation>
                    <StarSelected />
                </StarAnimation>
            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }

const styles = StyleSheet.create({
    star: {
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    }
})