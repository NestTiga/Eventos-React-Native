import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Cartelera() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.titulotexto}>SOUTH-AMERICA</Text>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Image source={require('../assets/martin.jpg')}
                            style={styles.cardImage}></Image>
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>Martin Garrix</Text>
                            <Text style={styles.cardLabel}>Lugar del evento: Quito, Ecuador</Text>
                            <Text style={styles.cardDescription}>Preventa el 07 de Enero de forma virtual y lugares físicos: Centro Comercial Scala, Condado Shoping, Centro Comercial Iñaquito, Paseo San Francisco. La venta general estará disponible el 12 de Enero.</Text>
                            <Text style={styles.cardFooter}>Fecha del evento:  24-02-2024</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.titulotexto}>URBAN-FEST</Text>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Image source={require('../assets/yankee.jpg')}
                            style={styles.cardImage}></Image>
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>Don Omar, Chencho, Makano</Text>
                            <Text style={styles.cardLabel}>Lugar del evento: Quito, Ecuador</Text>
                            <Text style={styles.cardDescription}>Preventa el 15 de Enero de forma virtual y lugares físicos: Centro Comercial Scala, Condado Shoping, Centro Comercial Iñaquito, Paseo San Francisco. La venta general estará disponible el 20 de Enero.</Text>
                            <Text style={styles.cardFooter}>Fecha del evento:  14-06-2024</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.titulotexto}>FERXX-PARTY</Text>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Image source={require('../assets/ferxxo.jpg')}
                            style={styles.cardImage}></Image>
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>Feid</Text>
                            <Text style={styles.cardLabel}>Lugar del evento: Quito, Ecuador</Text>
                            <Text style={styles.cardDescription}>Preventa el 10 de Febrero de forma virtual y lugares físicos: Centro Comercial Scala, Condado Shoping, Centro Comercial Iñaquito, Paseo San Francisco. La venta general estará disponible el 25 de Febrero.</Text>
                            <Text style={styles.cardFooter}>Fecha del evento:  22-08-2024</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        paddingHorizontal: 10,
    },
    // inicia la otra
    titulotexto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    card: {
        height: 360,
        borderRadius: 6

    },
    cardElevated: {
        backgroundColor: '#FFFFFF'

    },
    cardImage: {
        width: '100%',
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }
});