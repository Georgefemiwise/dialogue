import { Link } from 'expo-router'
import React from 'react'
import { List } from 'react-native-paper'
import Icons from '@expo/vector-icons/MaterialIcons'
import { View } from 'react-native'

interface ListProps {
    title: string
    description?: string
    name?: any
    href: any
}

const CustomList: React.FC<ListProps> = ({
    title,
    description,
    name,
    href = '',
}) => (
    <Link href={href}style={{ backgroundColor: 'white',marginVertical:4 }}>
        <List.Item
            title={title}
            
            description={description}
            left={(props) => (
                <View
                    style={{
                        width: 50,
                        marginLeft: 5,
                    }}
                >
                    <Icons size={28} {...props} name={name} />
                </View>
            )}
        />
    </Link>
)

export default CustomList
