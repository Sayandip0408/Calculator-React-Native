import { View, Text, SafeAreaView, Linking } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [formula, setFormula] = useState("");
    const [answer, setAnswer] = useState("");
    const [evalAns, setEvalAns] = useState("");

    let headerColor = "white";

    const changeToLight = () => {
        setDarkMode(false);
    }

    const changeToDark = () => {
        setDarkMode(true);
    }

    const addToAnswer = (value, evalue) => {
        let newVal = answer.concat(value);
        let newEvalVal = evalAns.concat(" ", evalue);
        setAnswer(newVal);
        setEvalAns(newEvalVal);
    }
    const clear = () => {
        setFormula("");
        setAnswer("");
        setEvalAns("");
    }

    const showAns = () => {
        setFormula(evalAns);
        try {
            let result = eval(answer);
            result = result.toString();
            setAnswer(result);
            setEvalAns(result);
        } catch (e) {
            alert("SyntaxError: Cannot be solved!");
        }

    }

    if (darkMode) headerColor = "#1E1E1E";

    return (
        <SafeAreaView className={`flex-1 ${!darkMode ? `bg-white` : `bg-[#1E1E1E]`}`}>
            <ExpoStatusBar style={darkMode ? `light` : 'dark'} />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: headerColor,
                    },
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <View className={`${darkMode ? `bg-[#282829]` : `bg-[#F9F8F8]`} h-[80%] w-[100px] flex items-center justify-around gap-1 flex-row rounded-lg`}>
                            <TouchableOpacity>
                                <Feather name="sun" size={18} color={darkMode ? `gray` : `black`} onPress={changeToLight} className="p-1" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="moon-outline" size={16} color={darkMode ? `white` : `#bdc3c7`} onPress={changeToDark} className="p-1" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <View className="flex-1">
                <View className="h-[30%] w-[100%] flex items-center justify-end">
                    <Text className={`w-[100%] text-right text-lg px-10 font-semibold ${darkMode ? `text-gray-200` : `text-black`}`}>{formula}</Text>
                    <Text className={`w-[100%] text-right text-5xl px-8 h-[35%] py-[3%] font-bold ${darkMode ? `text-gray-200` : `text-black`}`}>{answer}</Text>
                </View>
                <View className={`${darkMode ? `bg-[#2A2D38]` : `bg-[#F9F9F9]`} rounded-t-[35px] w-[100%] flex-1 p-5 gap-1`}>
                    <View className="flex flex-row justify-center items-stretch h-[20%] gap-[6px]">
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33]` : `bg-[#F6F6F7]`} flex items-center justify-center rounded-xl basis-1/2`} onPress={() => Linking.openURL("https://sayandip2.netlify.app/")}>
                            <AntDesign name="infocirlceo" size={24} color="#54F5D6" />
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33]` : `bg-[#F6F6F7]`} flex items-center justify-center rounded-xl basis-1/4`} onPress={clear}>
                            <Text className="text-xl font-semibold text-[#54F5D6]">AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33]` : `bg-[#F6F6F7]`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("/", "÷")}>
                            <MaterialCommunityIcons name="division" size={24} color="#F58082" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row justify-center items-stretch h-[20%] gap-1">
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("7", "7")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("8", "8")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("9", "9")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("*", "⤫")}>
                            <Entypo name="cross" size={24} color="#F58082" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row justify-center items-stretch h-[20%] gap-1">
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("4", "4")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("5", "5")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("6", "6")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("-", "−")}>
                            <Entypo name="minus" size={24} color="#F58082" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row justify-center items-stretch h-[20%] gap-1">
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("1", "1")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("2", "2")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("3", "3")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("+", "+")}>
                            <Entypo name="plus" size={24} color="#F58082" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row justify-center items-stretch h-[18%] gap-[6px]">
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer("0", "0")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/4`} onPress={() => addToAnswer(".", ".")} >
                            <Text className={`text-xl font-semibold ${darkMode ? `text-white` : `text-black`} `}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`${darkMode ? `bg-[#262A33] text-white` : `bg-[#F6F6F7] text-black`} flex items-center justify-center rounded-xl basis-1/2`} onPress={showAns}>
                            <MaterialCommunityIcons name="equal" size={24} color="#F58082" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home