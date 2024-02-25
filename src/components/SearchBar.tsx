'use client'
import React, {useRef} from 'react';
import {Button, Flex, FormControl, Input, Select} from "@chakra-ui/react";

export default function SearchBar() {

    const formRef = useRef(null);

    const years = [];
    for (let year = 2024; year >= 1990; year--) {
        years.push(<option key={year} value={year}>{year}</option>);
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // This will submit the form to the specified action URL
        //formRef.current.submit();
    };

    return (
        <Flex as="form" action="http://172.16.1.80/cgi-bin/torrent_fetch?arg1=value1&arg2=value2&arg3=value3" method="get"
              justifyContent={'center'} alignItems={'center'} w={'100%'}>
            <FormControl>
                <Input name="arg1" type={'text'} placeholder="title" bg={'gray.100'} roundedRight={0} roundedBottomLeft={0} />
                <Flex>
                <Select name="arg2" bg={'gray.100'} color={'grey'} placeholder={"year"} rounded={0} roundedBottomLeft={6}>
                    {years}
                </Select>
                <Select name="arg3" bg={'gray.100'} defaultValue={'1080p'} color={'grey'} placeholder={"resolution"} rounded={0} roundedTopLeft={0}>
                    <option value="720p">720p</option>
                    <option value="1080p">1080p</option>
                    <option value="2160p">2160p</option>
                </Select>
                </Flex>
            </FormControl>
            <Button type="submit" onClick={handleSubmit} bg={'blue.400'} roundedLeft={0} px={6} h={'100%'}>Search</Button>
        </Flex>
    );
}