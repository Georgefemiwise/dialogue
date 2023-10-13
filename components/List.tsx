import { Link } from 'expo-router'
import  React from 'react'
import { List } from 'react-native-paper'
import Icons from '@expo/vector-icons/MaterialIcons'

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
    <Link href={href}>
        <List.Item
            title={title}
            description={description}
            left={(props) => (
                <Icons size={28}  {...props} name={name} />
            )}
        />
    </Link>
)

export default CustomList
