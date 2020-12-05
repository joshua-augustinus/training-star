import React, { ReactNode, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
    children: ReactNode
}

const StarAnimation = (props: Props) => {

    useEffect(() => {

    }, []);


    return (

        <View
            style={{
                width: 70, height: 70
            }}>
            {props.children}
        </View>

    );

}


export { StarAnimation }

const styles = StyleSheet.create({
    star: {
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    }
})