import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'react-native';

export default function Splash({ navigation }: any) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home")
        }, 2500);

        StatusBar.setBackgroundColor('#16A085');
        StatusBar.setBarStyle('dark-content');
        return () => {
            StatusBar.setBackgroundColor('#F5F5F5'); // Restaurar el color predeterminado al salir de esta pantalla
            StatusBar.setBarStyle('dark-content'); // Restaurar el tema predeterminado al salir de esta pantalla
        };
    }, []);

    return (
        <View style={styles.container}>
            <Animatable.Text style={styles.fuente} duration={3000} animation="zoomInUp">
                FireTickets
            </Animatable.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16A085',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fuente: {
        color: "white",
        fontSize: 38,
        fontWeight: '900',
    }
})