import React from 'react'
import {View, Text, Image, StyleSheet,Button} from 'react-native'


const PizzaDetail = ({route, navigation}) => {

    const pizza = route.params.pizza;
    const ingredients = pizza.ingredients
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{uri: 'https://static.cuisineaz.com/400x320/i96018-pizza-reine.jpg'}}
            />
            <Text>{pizza.nom}</Text>
            <Text>{pizza.prix} euro</Text>
            <Text>Ingedients:</Text>

            <View style={[styles.main, styles.liste]}>
                {ingredients.map((value,index) => {return (<Text key={index}>{value}</Text>);})}
            </View>
            <Button title ='retour' onPress={()=> navigation.goBack()}/>
        </View>
    );

}
export default PizzaDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    liste: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'black',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flex: 0


    },
    img: {

        width: 50,
        height: 50
    }

})
