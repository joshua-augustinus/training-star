import React, { ReactNode, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { StarSelected } from './StarSelected';
import { StarUnselected } from './StarUnselected';

interface Props {
    children: ReactNode,
    isSelected: boolean
}

const StarAnimation = (props: Props) => {
    const selectedOpacity = useRef(new Animated.Value(0)).current;
    const unselectedOpacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (props.isSelected) {
            const animation1 = Animated.timing(unselectedOpacity, {
                toValue: 0,
                useNativeDriver: true
            })
            const animation2 = Animated.timing(selectedOpacity, {
                toValue: 1,
                useNativeDriver: true
            })

            Animated.parallel([animation1, animation2]).start();
        } else {
            const animation1 = Animated.timing(unselectedOpacity, {
                toValue: 1,
                useNativeDriver: true
            })
            const animation2 = Animated.timing(selectedOpacity, {
                toValue: 0,
                useNativeDriver: true
            })

            Animated.parallel([animation1, animation2]).start();
        }
    }, [props.isSelected]);


    return (
        <>
            <Animated.View
                style={{
                    width: 70, height: 70, opacity: unselectedOpacity
                }}>
                <StarUnselected />
            </Animated.View>
            <Animated.View
                style={{
                    opacity: selectedOpacity,
                    width: 70, height: 70, transform: [{ translateY: -70 }]
                }}>
                <StarSelected />
            </Animated.View>

        </>

    );

}


export { StarAnimation }

const styles = StyleSheet.create({
    star: {
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    }
})