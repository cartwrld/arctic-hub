'use client'

import {Button, Flex, Heading} from "@chakra-ui/react";
import Image from "next/image";

export default function AppButton(props: { appName: string }) {

    const {appName} = props

    const handleAppName = (name: string) => {
        let retName = ''
        switch (name) {
            case 'tvshows' :
                retName = 'TV Shows';
                break;
            default:
                retName = name.charAt(0).toUpperCase() + name.substring(1)
        }
        return retName
    }

    async function getMovies() {
        const collection = [];

        console.log('fetching, please wait')
        const initRes = await fetch('https://yts.mx/api/v2/list_movies.json?year=2010&quality=2160p&genre=comedy')
        if (!initRes.ok) {
            throw Error('errrrrorrrr');
        }
        console.log(initRes.body)
        const data = await initRes.json()
        console.log(data)
        const movieCount = data.data.movie_count

        const pageCount = movieCount / 20

        for (let i=1; i<=10; i++) {
            console.log(pageCount)

            const pageRes = await fetch(`https://yts.mx/api/v2/list_movies.json?quality=1080p&year=2010&page=${i}`)

            if (!pageRes.ok) {
                throw Error('errrrrorrrr');
            }
            collection.push((await pageRes.json()).data.movies)

        }

        console.log(collection)

    }

    return (
        <Button w={'fit-content'} h={'fit-content'} m={0} rounded={9} minW={112} bg={'none'} onClick={async()=>getMovies()}>
            <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} p={5} pb={3}
                      fontWeight={'semibold'}>
                    <Image src={`/images/${appName}.png`} alt={'music'} width={50} height={50}/>
                </Flex>

                <Flex justifyContent={'center'} alignItems={'center'} p={0} m={0}>
                    <Heading fontWeight={'600'} p={0} m={0} lineHeight={0} mb={5}
                             fontSize={'regular'}>{handleAppName(appName)}</Heading>
                </Flex>
            </Flex>
        </Button>
    )
}