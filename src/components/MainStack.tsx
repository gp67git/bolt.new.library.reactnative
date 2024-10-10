import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { BookList } from "./BookList";
import { BookDetails } from "./BookDetails";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="BookList"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="BookList"
                component={BookList}
                options={{ title: "Book List" }}
            />
            <StackNavigator.Screen
                name="BookDetails"
                component={BookDetails}
                options={({ route }) => ({ title: route.params.title })}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);