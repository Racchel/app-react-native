import React, { useState, useEffect } from "react";
import { 
    SafeAreaView, 
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";


import db from "../../config/firebaseconfig.js";
import styles from "./style";

export default function Task(){

    const [ task, setTask ] = useState([]);

    useEffect(() => {
        db.

    }, []);

    return(
        <View>
            <Text>Page Task</Text>
        </View>
    )
}