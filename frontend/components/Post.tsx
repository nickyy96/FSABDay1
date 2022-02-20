import {FC, useState} from "react";
import {Box, IconButton, Divider, Text, VStack, HStack, Flex, Heading, Image} from "@chakra-ui/react";
import Comment from "./Comment";
import NewPostModal from "./NewPostModal";
import {IoIosAddCircle} from "react-icons/io"

interface Props {
    title: string;
    body: string;
    postedAt: Date;
}

const Post: FC<Props> = ({title, body, postedAt}) => {
    // TODO: Implemnt a Post!

    const[modelIsOpen, setOpenness] = useState(false)
    const src = "https://freepikpsd.com/file/2019/10/bear-png-cartoon-1-Transparent-Images.png";
    return (
        <Flex flexDirection='column' align={"center"} background="skyblue">
            <Box p='2' bg={"skyblue"} w="300px">
                <HStack align="center" spacing={"100px"} w={"300px"}>
                    <Image boxSize="100px" objectFit="cover" src={src} alt="bear"></Image>
                    <IconButton 
                        icon={<IoIosAddCircle />} 
                        onClick={() => setOpenness(true)} 
                        aria-label='Post'
                        colorScheme='whiteAlpha'
                        size={"lg"}>
                    </IconButton>
                </HStack>
            </Box>
            <Box flex = '1' h='100%' bg='skyblue' p={4} color='white' w="800px">
                <NewPostModal onClose={() => setOpenness(false)} isOpen={modelIsOpen} />
            </Box>
        </Flex>
    );
}

export default Post;

/*


function MakeAPICall() {
    callAPI()
        .then(result => console.log(result))
        .catch(error => console.error(error));
}

let myPromise = new Promise(function(resolve, reject)) {
    setTimeout(() => resolve("done"));
});








*/