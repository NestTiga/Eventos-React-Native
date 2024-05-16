import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'


export default function CrearEvento({ navigation, route }: any) {



    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setcategoria] = useState("");
    const [stock, setStock] = useState("");
    const [agree, setAgree] = useState(true);
    var id = '6';


    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Nombre del artista que tendrá un evento: </Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Ingrese un nombre...'
                        placeholderTextColor='gray'
                        value={nombre}
                        onChangeText={(userdata) => setNombre(userdata)}>
                    </TextInput>
                    {/* userData (o el parámetro que le hayas dado en la función onChangeText) 
            representa el texto que el usuario está ingresando en el TextInput en tiempo real. */}
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Precio: </Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Ingrese un precio...'
                        placeholderTextColor='gray'
                        value={precio}
                        onChangeText={(precio) => setPrecio(precio)}>
                    </TextInput>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Categoria: </Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Ingrese una categoria..."
                        placeholderTextColor='gray'
                        value={categoria}
                        onChangeText={(categoria) => setcategoria(categoria)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Stock: </Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Ingrese la cantidad de boletos disponibles..."
                        placeholderTextColor='gray'
                        keyboardType="numeric"
                        value={stock}
                        onChangeText={(stock) => setStock(stock)}
                    />
                </View>

                <TouchableOpacity
                    style={[
                        styles.buttonStyle,
                        {
                            backgroundColor: agree ? "#3498db" : "grey",
                        },
                    ]}
                    disabled={!agree}
                    onPress={() => {
                        const nuevoEvento = { id, name: nombre, price: precio, category: categoria, stock: stock };
                        navigation.navigate({
                            name: 'MostrarEventos',
                            params: { eventos: [...(route.params?.eventos || []), nuevoEvento] },
                        });
                    }}
                >
                    <Text style={styles.buttonText}> Guardar </Text>
                </TouchableOpacity>

                {/* fin del contenedor */}
            </View>
        </SafeAreaView>
    );
}

//Estilos
const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontWeight: "bold",
        color: "#7d7d7d",
        paddingBottom: 5,
        fontFamily: "JosefinSans_300Light",
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 2,
        color: "#000000"
    },
    multilineStyle: {
        paddingVertical: 4,
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },
    buttonText: {
        color: "#eee",
    }
});