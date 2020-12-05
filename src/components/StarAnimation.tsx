import React, { ReactNode, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { StarSelected } from './StarSelected';
import { StarUnselected } from './StarUnselected';

interface Props {
    children: ReactNode,
    isSelected: boolean
}

const WIDTH = 40;

const StarAnimation = (props: Props) => {
    const shimmerOpacity = useRef(new Animated.Value(1)).current;
    const unselectedOpacity = useRef(new Animated.Value(1)).current;
    const selectedScale = useRef(new Animated.Value(0)).current;
    const shimmerScale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (props.isSelected) {

            const animation1 = Animated.timing(unselectedOpacity, {
                toValue: 0,
                useNativeDriver: true,
                duration: 0
            })
            const animation2 = Animated.timing(shimmerOpacity, {
                toValue: 0.2,
                useNativeDriver: true,
                duration: 500
            })

            const animation3 = Animated.timing(selectedScale, {
                toValue: 1,
                useNativeDriver: true,
                duration: 500
            })

            const animation4 = Animated.timing(shimmerScale, {
                toValue: 2,
                useNativeDriver: true,
                duration: 500
            })

            //Reset quickly
            const reset1 = Animated.timing(shimmerOpacity, {
                toValue: 1,
                useNativeDriver: true,
                duration: 100
            })

            const reset2 = Animated.timing(shimmerScale, {
                toValue: 0,
                useNativeDriver: true,
                duration: 100
            })

            Animated.parallel([animation1, animation2, animation3, animation4]).start(() => {
                Animated.parallel([reset1, reset2]).start();
            });
        } else {
            const animation1 = Animated.timing(unselectedOpacity, {
                toValue: 1,
                useNativeDriver: true
            })
            const animation2 = Animated.timing(selectedScale, {
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
                    width: WIDTH, height: WIDTH, opacity: unselectedOpacity
                }}>
                <StarUnselected />
            </Animated.View>
            <Animated.View
                style={{
                    width: WIDTH, height: WIDTH, transform: [{ translateY: -WIDTH }, { scale: selectedScale }]
                }}>
                <StarSelected />
            </Animated.View>
            <Animated.View
                style={{
                    opacity: shimmerOpacity,
                    width: WIDTH, height: WIDTH, transform: [{ translateY: -WIDTH * 2 }, { scale: shimmerScale }]
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