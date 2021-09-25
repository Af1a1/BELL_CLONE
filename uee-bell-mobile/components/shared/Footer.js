import React, { useState } from "react";
import {
	NativeBaseProvider,
	Box,
	Text,
	Icon,
	HStack,
	Center,
	Pressable,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import theme from "../../config/theme";

export default function Footer({  navigation }) {
	const [selected, setSelected] = useState(1);
	return (
		<NativeBaseProvider theme={theme}>
			<Box flex={1} bg="white" safeAreaTop>
				<Center flex={1}></Center>
				<HStack bg="primary.600" alignItems="center" safeAreaBottom shadow={6}>
					<Pressable
						cursor="pointer"
						opacity={selected === 0 ? 1 : 0.5}
						py="3"
						flex={1}
						onPress={() => setSelected(0) && navigation.navigate('Home')}>
						<Center>
							<Icon
								mb="1"
								as={
									<MaterialCommunityIcons
										name={selected === 0 ? 'home' : 'home-outline'}
									/>
								}
								color="white"
								size="sm"
							/>
							<Text color="white" fontSize="12">
								Home
							</Text>
						</Center>
					</Pressable>
					<Pressable
						cursor="pointer"
						opacity={selected === 1 ? 1 : 0.5}
						py="2"
						flex={1}
						onPress={() => navigation.navigate('Home')}
					>
						<Center>
							<Icon
								mb="1"
								as={<MaterialIcons  name="monetization-on" />}
								color="white"
								size="sm"
							/>
							<Text color="white" fontSize="12">
								Payment
							</Text>
						</Center>
					</Pressable>
					<Pressable
						cursor="pointer"
						opacity={selected === 2 ? 1 : 0.6}
						py="2"
						flex={1}
						onPress={() => setSelected(2)}
					>
						<Center>
							<Icon
								mb={1}
								as={
									<MaterialCommunityIcons
										name={selected === 2 ? 'chart-pie' : 'chart-pie'}
									/>
								}
								color="white"
								size="sm"
							/>
							<Text color="white" fontSize={12}>
								Usage
							</Text>
						</Center>
					</Pressable>
					<Pressable
						cursor="pointer"
						opacity={selected === 3 ? 1 : 0.6}
						py="2"
						flex={1}
						onPress={() => setSelected(3)}
					>
						<Center>
							<Icon
								mb={1}
								as={
									<MaterialIcons
										name={selected === 3 ? 'add-circle' : 'add-circle-outline'}
									/>
								}
								color="white"
								size="sm"
							/>
							<Text color="white" fontSize={12}>
								Add-on
							</Text>
						</Center>
					</Pressable>
					<Pressable
						cursor="pointer"
						opacity={selected === 4 ? 1 : 0.5}
						py="2"
						flex={1}
						onPress={() => setSelected(4)}
					>
						<Center>
							<Icon
								mb={1}
								as={
									<MaterialCommunityIcons
										name={selected === 4 ? 'account' : 'account-outline'}
									/>
								}
								color="white"
								size="sm"
							/>
							<Text color="white" fontSize="12">
								Profile
							</Text>
						</Center>
					</Pressable>
				</HStack>
			</Box>
		</NativeBaseProvider>
	);
}

