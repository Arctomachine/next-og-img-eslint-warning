import {ImageResponse} from '@vercel/og'

export const config = {
    runtime: 'edge',
}

export async function GET(request: Request) {
    const url = 'https://dummyimage.com/600x400/000/fff'

    return new ImageResponse(
        (
            <>
                <img src={url} style={{
                    width: 600,
                    height: 400,
                    objectFit: 'contain',
                }} alt={''}/>
            </>
        ),
        {
            width: 600,
            height: 400,
        },
    )
}