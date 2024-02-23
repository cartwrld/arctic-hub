


import {Button, Flex, Input} from "@chakra-ui/react";

export default function SearchBar(props: {w : number}) {
    const {w} = props
    return (
        <Flex justifyContent={'center'} alignItems={'center'} w={w} my={5}>
            <Input type={'search'} bg={'gray.100'} roundedRight={0} sx={{ outline: 'none', boxShadow: 'none' }}/>
            <Button bg={'blue.400'} roundedLeft={0} px={6}>Search</Button>
        </Flex>
    )
}