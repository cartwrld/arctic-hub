


import {Button, Flex, Input} from "@chakra-ui/react";

export default function SearchBar() {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} my={5}>
            <Input type={'search'} bg={'gray.100'} roundedRight={0}/>
            <Button bg={'#cfd4d9'} roundedLeft={0} px={6}>Search</Button>
        </Flex>
    )
}