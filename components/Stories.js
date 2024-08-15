import React from 'react';
import { StyleSheet, Image, Text, View, FlatList} from 'react-native';

export default function Stories() {
    const stories = [
        {
            id: 1,
            nome: 'PiuPiu',
            src: require('../assets/Stories/piupiu.jpg'),
        },
        {
            id: 2,
            nome: 'Frajola',
            src: require('../assets/Stories/frajola.jpg'),
        },
        {
            id: 3,
            nome: 'Patolino',
            src: require('../assets/Stories/patolino.jpg'),
        },
        {
            id: 4,
            nome: 'taz',
            src: require('../assets/Stories/taz.jpg'),
        },
        {
            id: 5,
            nome: 'perna',
            src: require('../assets/Stories/pernalonga.jpg'),
        },
        {
            id: 6,
            nome: 'perna',
            src: require('../assets/Stories/pernalonga.jpg'),
        },
        {
            id: 7,
            nome: 'taz',
            src: require('../assets/Stories/taz.jpg'),
        },
        {
            id: 8,
            nome: 'Patolino',
            src: require('../assets/Stories/patolino.jpg'),
        },

    ];

    function renderItem({ item }) {
        return <View style={styles.story}>
            <Image style={styles.imgstory} source={item.src} />
            <Text>{item.nome}</Text>
        </View>
    }

    return (
        <View style={styles.stories}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    stories: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#fff',
    },
    story: {
        height: 90,
        width: 90,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    imgstory: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
});