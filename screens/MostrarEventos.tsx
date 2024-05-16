import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'


const initialEventos = [
    { id: '1', name: 'Martin Garrix', price: '90', category: 'Electrónica', stock: 500 },
    { id: '2', name: 'Artistas varios', price: '50', category: 'Reggaeton', stock: 200 },
    { id: '3', name: 'Feid', price: '50', category: 'Reggaeton', stock: 300 },
    { id: '4', name: 'Widinson, Nellly', price: '50', category: 'Chicha', stock: 100 },
    { id: '5', name: 'Blackpink', price: '50', category: 'K-Pop', stock: 200 },
];

export default function MostrarEventos({ navigation, route }: any) {

    const [eventos, setEventos] = useState([...initialEventos]);

    const renderItem = ({ item }: any) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>${item.price}</Text>
            <Text style={styles.cell}>{item.category}</Text>
            <Text style={styles.cell}>   {item.stock}</Text>
        </View>
    );

    useEffect(() => {
        if (route.params?.eventos) {
            setEventos([...eventos, ...route.params.eventos]);
        }
    }, [route.params?.eventos]);

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ID</Text>
                <Text style={styles.headerText}>Nombre</Text>
                <Text style={styles.headerText}>Precio</Text>
                <Text style={styles.headerText}>Categoría</Text>
                <Text style={styles.headerText}>  Boletos</Text>
            </View>
            <FlatList
                data={eventos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.containerView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate({
                            name: 'CrearEvento',
                            eventos
                        });
                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Nuevo evento</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 10
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#16A085',
        padding: 10,
        marginBottom: 5,
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    cell: {
        flex: 1,
        color: 'black'
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        alignItems: 'center',
        margin: 20,
        borderRadius: 5,
        width: 150,
        alignContent: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    containerView: {
        alignItems: 'center',
    }
});