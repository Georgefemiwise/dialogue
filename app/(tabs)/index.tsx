import { FlatList } from 'react-native'
import React from 'react'
import FeedCard from '../../components/card/FeedCard'
export default function Homescreen() {
    const feeds = [
        {
            sender: 'John Smith',
            content: 'Join us for the upcoming science fair! 🚀🔬 #ScienceFair',
            time: '5m',
            image_url: 'https://example.com/image1.jpg',
        },
        {
            sender: 'Emily Davis',
            content:
                'Reminder: Parent-Teacher conferences next week. 📆 #ParentTeacherConferences',
            time: '10m',
            image_url: 'https://example.com/image2.jpg',
        },
        {
            sender: 'Michael Johnson',
            content:
                'Congratulations to the soccer team on their victory! ⚽🏆 #SoccerWin',
            time: '15m',
            image_url: 'https://example.com/image3.jpg',
        },
        {
            sender: 'Sarah Wilson',
            content:
                "Don't forget the school picnic this Saturday! 🍔🌞 #SchoolPicnic",
            time: '20m',
            image_url: 'https://example.com/image4.jpg',
        },
        {
            sender: 'David Brown',
            content:
                'Important announcement: New library hours 📚 #LibraryHours',
            time: '25m',
            image_url: 'https://example.com/image5.jpg',
        },
        {
            sender: 'Ava Miller',
            content:
                'School club meetings tomorrow after classes. 📝 #SchoolClub',
            time: '30m',
            image_url: 'https://example.com/image6.jpg',
        },
        {
            sender: 'Liam Jones',
            content:
                'Art exhibition in the school auditorium this Friday! 🎨🖼 #ArtExhibition',
            time: '35m',
            image_url: 'https://example.com/image7.jpg',
        },
    ]

    return (
        <FlatList
            data={feeds}
            renderItem={({ item }) => (
                <FeedCard user={item.sender} content={item.content} time={item.time} />
            )}
            keyExtractor={(item, index) => index.toString()} // Provide a unique key for each item
        />
    )
}
