import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type BookDetailsProps = {
    route: RouteProp<MainStackParamList, "BookDetails">,
    navigation: FrameNavigationProp<MainStackParamList, "BookDetails">,
};

export function BookDetails({ route }: BookDetailsProps) {
    const { title, author, description } = route.params;

    return (
        <scrollView height="100%">
            <stackLayout style={styles.container}>
                <label style={styles.title}>{title}</label>
                <label style={styles.author}>{author}</label>
                <label style={styles.description}>{description}</label>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    author: {
        fontSize: 18,
        color: "#666",
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
});