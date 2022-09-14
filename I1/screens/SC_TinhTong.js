import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SC_TinhTong = () => {

    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    const [result, setResult] = useState(0);

    function callInput() {
        if(isNaN(numberA)) {
            Alert.alert('Input A is not number! Please re-enter!');
        } else if(isNaN(numberB)) {
            Alert.alert('Input B is not number! Please re-enter!');
        } else {

            var rs = Number(numberA) + Number(numberB);
            setResult(rs);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.vInput}>
                <Text style={styles.text1}>Number A: </Text>
                <TextInput
                    style={styles.input}
                    value={numberA}
                    onChangeText={setNumberA}
                    keyboardType="numeric"
                    placeholder='Number A'
                />
            </View>
            <View style={styles.vInput}>
                <Text style={styles.text1}>Number B: </Text>
                <TextInput
                    style={styles.input}
                    value={numberB}
                    onChangeText={setNumberB}
                    keyboardType="numeric"
                    placeholder='Number B'
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={callInput}>
                <Text style={styles.btnText}>Press here</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>Result: {result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vInput: {
        flexDirection: "row",
    },
    text1: {
        fontSize: 22,
        fontWeight: '700',
        marginTop: 12,
    },
    input: {
        width: 200,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        marginBottom: 20,
        fontSize: 20,
        marginVertical: 10,
    },
      button: {
        width: 130,
        paddingVertical: 10,
        backgroundColor: 'yellow',
        marginHorizontal: 30,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#6c71c4',
    },
   btnText: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
   },

});

export default SC_TinhTong