import React from 'react';
import { View, Text, StyleSheet, Alert, Modal, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const TransportScreen=()=>{
    return(
        <TouchableOpacity>
            <Ionicons name="airplane" size={24} color={color} />
        </TouchableOpacity>
    );
};

export default TransportScreen;