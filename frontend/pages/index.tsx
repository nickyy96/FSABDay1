import type {NextPage} from 'next'
import {Button, Container, HStack, Spacer, Text, VStack, Box} from "@chakra-ui/react";
import Post from "../components/Post";
import NewPostModal from "../components/NewPostModal";
import {useState} from "react";

const Home: NextPage = () => {
    // TODO: Implement this NextPage!
    return (
        <Post title="hi" body="thing" postedAt={new Date()}/>
    );
}

export default Home
