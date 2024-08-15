import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {

    return (
        <View style={styles.feed}>
            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.posteheaderleft}>
                        <Image style={styles.postheaderimg} source={require('../assets/Posts/tribuna.jpg')} />
                        <Text>Tribuna do norte</Text>
                    </View>
                    <View style={styles.posteheaderright}>
                        <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                    </View>
                </View>
                <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/Postagens/img1.jpg')} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={24} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={24} color="black" />
                </View>
            </View>
            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.posteheaderleft}>
                        <Image style={styles.postheaderimg} source={require('../assets/Posts/fm96.jpg')} />
                        <Text>96 Fm</Text>
                    </View>
                    <View style={styles.posteheaderright}>
                        <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                    </View>
                </View>
                <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/Postagens/img2.jpg')} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={24} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={24} color="black" />
                </View>
            </View>
            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.posteheaderleft}>
                        <Image style={styles.postheaderimg} source={require('../assets/Posts/bolaria.png')} />
                        <Text>Bolaria</Text>
                    </View>
                    <View style={styles.posteheaderright}>
                        <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                    </View>
                </View>
                <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/Postagens/img3.jpg')} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={24} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={24} color="black" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    feed: {
      flex: 1,
      backgroundColor: '#fff',
    },
    post: {
      backgroundColor: '#fff',
    },
    postheader: {
  
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    posteheaderleft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    posteheaderright: {
      paddingEnd: 10,
    },
    postheaderimg: {
      height: 50,
      width: 50,
      borderRadius: 25,
      margin: 10,
    },
    postimg: {
      width: '100%',
      height: undefined,
    },
    footer: {
      height: 60,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },
    footericon: {
      margin: 5,
    },
});