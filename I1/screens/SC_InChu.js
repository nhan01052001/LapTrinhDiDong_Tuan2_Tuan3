import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SC_InChu = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    function callInput() {
        setValue2(value1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Enter whatever you want !</Text>
            <TextInput
                style={styles.input}
                value={value1}
                onChangeText={setValue1}
                placeholder='Your input'
            />
            <TouchableOpacity style={styles.button} onPress={callInput}>
                <Text style={styles.btnText}>Press here</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>Output: {value2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
    },
    input: {
        width: 300,
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

export default SC_InChu