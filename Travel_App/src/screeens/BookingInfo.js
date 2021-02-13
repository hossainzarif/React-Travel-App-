import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Input, Button, Card, Text } from "react-native-elements";
import CreditCardForm from '../Reusable/CreditCardForm';
import * as firebase from "firebase";
import "firebase/firestore";

const BookingInfo = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.title}>Credit Card Info</Text>
            <CreditCardForm/>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    content: {
        paddingTop: 76,
        paddingHorizontal: 36,
    },
    title: {
        fontFamily: 'Avenir-Heavy',
        color: 'black',
        fontSize: 32,
        marginBottom: 5,
    },
});

export default BookingInfo;