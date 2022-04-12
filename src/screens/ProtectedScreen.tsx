import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { getProfessionals } from '../helpers/getProfessionals';
import { loadProfessionals } from '../helpers/loadProfessionals';
import { ProfessionalResponse } from '../interfaces/appInterfaces';

export const ProtectedScreen = () => {

    const { data, logOut } = useContext(AuthContext);
    const [professionals, setProfessionals] = useState([]);
    console.log(professionals);
    useEffect(() => {
        getProfessionals().then(res => {
            setProfessionals(res);
        })
    }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={{ backgroundColor: '#374152' }}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Doctores</Text>
                    </View>
                </View>
                {
                    professionals.length > 0 && professionals.map(({ lname, fname, phone, document2, schedule, email }) => (
                        <View key={email}>
                            <TouchableOpacity style={styles.cardContainer}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: document2 }}
                                />
                                <View style={styles.cardContainerText}>
                                    <Text style={styles.cardTitle}>{`Nombre: ${fname}`}</Text>
                                    <Text style={styles.cardTitle}>{`Apellido: ${lname}`}</Text>
                                    <Text style={styles.cardSubtitle}>{schedule}</Text>
                                    <Text style={styles.cardSubtitle}>{phone}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                } 

            </ScrollView>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        paddingVertical: 20,
        marginHorizontal: 30,
        marginVertical: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#374152'
    },
    cardContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 15,
        paddingLeft: 5,
        paddingRight: 20,
        height: 200,
    },
    cardText: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
    },
    cardContainerText: {
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'space-around',
      
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10,
    },
    cardSubtitle: {
        fontSize: 14,
        marginBottom: 10,
    },
    headerContainer: {
        backgroundColor: 'white',
        borderBottomRightRadius: 80,
    },
    input: {
        color: 'white',
        height: 40,
        marginVertical: 20,
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    image: {
        borderRadius: 15,
        height: 125,
        marginLeft: 15,
        width: 125,
    },
    formContainer: {
        alignContent: 'center',
        backgroundColor: '#374152',
        flex: 1,
    },
    title: {
        color: '#374152',
        fontSize: 35,
        fontWeight: '500',
        marginVertical: 30,
        marginLeft: 10,
        borderRadius: 100,
    },
    policiesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 80
    },
    policiesText: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '500',
        marginVertical: 15,
        textAlign: 'center',
        width: 200,
    },
    whiteText: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 5,
    }

})