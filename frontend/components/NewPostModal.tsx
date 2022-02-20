import {FC, FormEvent, useState} from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import {Box, Button, Input, Textarea, VStack, FormControl, FormLabel, Stack, Text} from "@chakra-ui/react";
import axios from "axios";
import Comment from "./Comment";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const NewPostModal: FC<Props> = ({isOpen, onClose}) => {
    // TODO: Fill out this handleSubmit function!

    const[postList, setPostList] = useState<any[]>([])
    const[bodyValue, setBody] = useState('')
    const[titleValue, setTitle] = useState('')
    const updateDisplay = () => {
        let nextValue = [titleValue, bodyValue]
        setPostList([...postList, nextValue])
    }
    const handleBodyChange = (e:any) => {
        let inputValue = e.target.value
        setBody(inputValue)
    }
    const handleTitleChange = (e:any) => {
        let inputValue = e.target.value
        setTitle(inputValue)
    }

    function handleSubmit(e: any) {
        e.preventDefault(); // this line must be called 
	    axios.post('http://localhost:8080/posts', {
            title: e.target.title.value,
            body: e.target.body.value
        })
            .then((response) => {
    	        console.log("Post success");
                onClose()
                updateDisplay()
            })
            .catch((error) => {
                console.log("Post failure")
            })
    }

    // TODO: Implemnt a NewPostModal!
    return (
        <>
            {postList.map((post) => (
                <VStack spacing={"6px"}>
                    <Box
                        color={"white"}
                        bgColor={"white"}
                        boxShadow={"dark-lg"}
                        h="auto"
                        w={"800px"}
                        padding={"8px"}
                    >
                        <Text key={"unique"} mb='20px' textColor={"black"}>
                            {post[0]}
                        </Text>
                        <Text key={"unique1"} mb='8px' textColor={"gray"}>
                            {post[1]}
                        </Text>
                        <Box h={"5px"} bgColor="skyblue">
                        </Box>
                        <Comment/>
                    </Box>
                </VStack>))}
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
                <ModalOverlay 
                    backdropFilter='auto'
                    backdropBlur='2px'
                />
                <ModalContent>
                    <ModalHeader alignContent="center">New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <FormControl onSubmit={handleSubmit} textColor="black">
                                <VStack alignItems="start" spacing="30px">
                                    <VStack alignItems="start" bg="white">
                                        <VStack alignItems="start">
                                            <FormLabel htmlFor="title">Title</FormLabel>
                                            <Input 
                                                variant='flushed' 
                                                name="title" 
                                                placeholder="title here" 
                                                type="text" 
                                                color="gray" 
                                                isRequired
                                                onChange={handleTitleChange}/>
                                        </VStack>
                                        <VStack alignItems="start">
                                            <FormLabel htmlFor="body">Body</FormLabel>
                                            <Textarea 
                                                size='sm' 
                                                resize='vertical' 
                                                name="body"
                                                placeholder="body here" 
                                                h='120px' 
                                                w='400px'
                                                onChange={handleBodyChange}/>
                                        </VStack>
                                    </VStack>
                                    <Button type="submit" colorScheme={"gray"}>Post</Button>
                                </VStack>
                            </FormControl>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default NewPostModal;
