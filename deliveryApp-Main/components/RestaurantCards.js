import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Text, TouchableOpacity, Image } from 'react-native'
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'

export default function RestaurantCards({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,}){

	const navigation = useNavigation();
    return (
        <TouchableOpacity 
			onPress={()=> {
				navigation.navigate('Restaurant', {
					id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
				})
			}}
			className = 'bg-white mr-3 shadow'>
            <Image source= {{
				uri: urlFor(imgUrl).url(),
            }}
            className='h-36 w-64 rounded-sm'/>
            <View className = 'px-3 pb-4 '>
				<Text className = 'font-bold text-lg pt-2'>{title}</Text>
				<View>
					<StarIcon color = 'green' opacity = {0.5} size = {22}></StarIcon>
					<Text className='text-green-500'>{rating}</Text> · {genre}
				</View>
				<View>
					<LocationMarkerIcon color = 'gray' opacity = {0.4} size = {22}/>
					<Text className = 'text-xs text-gray-500'>Nearby {address}</Text>
				</View>
		</View>
        </TouchableOpacity>
    )
        
}