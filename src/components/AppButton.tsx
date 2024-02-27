'use client'

import {Button, Flex, Heading} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function AppButton(props: { appName: string , link: string}) {

    const {appName} = props

    const handleAppName = (name: string) => {
        let retName = ''
        switch (name) {
            case 'tvshows' :
                retName = 'TV Shows';
                break;
            case 'arcticlab' :
                retName = 'Arctic Lab';
                break;
            default:
                retName = name.charAt(0).toUpperCase() + name.substring(1)
        }
        return retName
    }

    async function getMovies() {

        // const collection = [];
        //
        // console.log('fetching, please wait')
        // const initRes = await fetch('https://yts.mx/api/v2/list_movies.json?year=2010&quality=2160p&genre=comedy')
        // if (!initRes.ok) {
        //     throw Error('errrrrorrrr');
        // }
        // console.log(initRes.body)
        // const data = await initRes.json()
        // console.log(data)
        // const movieCount = data.data.movie_count
        //
        // const pageCount = movieCount / 20
        //
        // for (let i=1; i<=10; i++) {
        //     console.log(pageCount)
        //
        //     const pageRes = await fetch(`https://yts.mx/api/v2/list_movies.json?quality=1080p&year=2010&page=${i}`)
        //
        //     if (!pageRes.ok) {
        //         throw Error('errrrrorrrr');
        //     }
        //     collection.push((await pageRes.json()).data.movies)
        //
        // }
        //
        // console.log(collection)

    }

    return (
        <Link href={'arcticlab'}>
            <Button m={0} rounded={0} bg={'transparent'} onClick={async()=> getMovies()}>
            <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} rounded={0} >
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} rounded={20} boxShadow={'md'}
                      fontWeight={'semibold'} p={0} mb={3}>
                    <Image src={`/images/${appName}.png`} alt={'music'} width={70} height={70}/>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} p={0} m={0} >
                    <Heading fontWeight={'600'} p={0} m={0} lineHeight={0} mb={4}
                             fontSize={'regular'}>{handleAppName(appName)}</Heading>
                </Flex>
            </Flex>
        </Button>
        </Link>
    )
}