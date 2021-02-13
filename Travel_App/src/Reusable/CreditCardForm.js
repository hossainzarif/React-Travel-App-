import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import CurvedButtons from './CurvedButtons';
import TextField from './TextField';

const CreditCardForm = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    function onSubmit() {
        console.log('form submitted');
    }
    return (
        <View style={{ marginTop: 5, marginBottom: 10 }}>
            <TextField
                style={styles.textField}
                placeholder="Cardholder Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextField
                style={styles.textField}
                placeholder="Card Number"
                value={cardNumber}
                onChangeText={(text) => setCardNumber(text)}
            />
            {/* <View style={styles.row}> */}
            <TextField
                style={[
                    styles.textField
                ]}
                placeholder="Expiration Date"
                value={expiration}
                onChangeText={(text) => setExpiration(text)}
            />
            <TextField
                style={styles.textField}
                placeholder="Security Code"
                value={cvv}
                onChangeText={(text) => setCvv(text)}
            />
            {/* </View> */}

            <View style={{ marginTop: 20 }}>
                <CurvedButtons
                    title="$ PAY"
                    onPress={function () {
                        alert("Payment Done!");
                    }}
                    color='#db5e40'
                    bgcolor='white'
                    widthpass={310}
                    heightpass={45}

                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 36,
    },
    textField: {
        flex: 1,
        marginTop: 14,
    },
});
export default CreditCardForm;