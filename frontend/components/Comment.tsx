import {FC, useState} from "react";
import {Box, Button, Divider, Text, Textarea, Stack, CloseButton} from "@chakra-ui/react";

interface Props {
    content?: string;
    postedAt?: Date;
}

const Comment: FC<Props> = ({content, postedAt}) => {
    // TODO: Implement a Comment!
    const [commentsDisplayed, setCommentList] = useState<any[]>([])
    const [value, setValue] = useState('')

    const handleInputChange = (e:any) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }
    const updateDisplay = () => {
        setCommentList([...commentsDisplayed, value])
        console.log(commentsDisplayed)
    }
    return (
        <>
            {commentsDisplayed.map((comment) => (
                <Text key={"unique"} mb='6px' textColor="gray">{comment}</Text>
            ))}
            <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder='Enter Comment'
                textColor={"black"}
                h={"100px"}
                size='sm'
            />
            <Button onClick={updateDisplay} colorScheme='teal' size='xs'>
                Comment
            </Button>
        </>
    )
}

export default Comment;