import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type BookListProps = {
    route: RouteProp<MainStackParamList, "BookList">,
    navigation: FrameNavigationProp<MainStackParamList, "BookList">,
};

const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A classic novel about racial injustice in the American South." },
    { id: 2, title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society." },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", description: "A romantic novel of manners set in Georgian England." },
];

export function BookList({ navigation }: BookListProps) {
    return (
        <scrollView height="100%">
            <stackLayout style={styles.container}>
                {books.map((book) => (
                    <button
                        key={book.id}
                        style={styles.bookItem}
                        onTap={() => navigation.navigate("BookDetails", book)}
                    >
                        <label style={styles.bookTitle}>{book.title}</label>
                        <label style={styles.bookAuthor}>{book.author}</label>
                    </button>
                ))}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    bookItem: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    bookAuthor: {
        fontSize: 14,
        color: "#666",
    },
});