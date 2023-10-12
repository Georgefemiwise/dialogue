import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/MaterialIcons'
import SomeButton from './ActionButton'
import { mytheme } from '../../constants/Colors'

interface FeedProps {
    user: string
    content: string
    time?: any
}

export default function FeedCard({ user, content, time }: FeedProps) {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                }}
            >
                <Image
                    source={require('../../assets/images/dialogue-favicon---black.png')}
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 50,
                        marginRight: 5,
                    }}
                />

                <View>
                    <Text
                        style={{
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                        }}
                    >
                        {user}
                    </Text>
                    <Text style={{ color: '#999', fontSize: 12 }}>
                        {time} ago
                    </Text>
                </View>
            </View>

            <View>
                <Text style={styles.body}>{content}</Text>
            </View>
            <View style={styles.actions}>
                <SomeButton name="like" icon="heart" />
                <SomeButton name="comment" icon="chat" />
                <SomeButton name="share" icon="share" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: mytheme.base,
        paddingHorizontal: 15,
        margin: 5,
        paddingVertical: 15,
        borderRadius: 7,
        opacity: 0.9,
    },
    body: { color: mytheme.neutral },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginTop: 10,
    },
})
