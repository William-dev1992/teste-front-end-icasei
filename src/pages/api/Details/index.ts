import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse): any {
    const { query } = req;

    const options = {
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/videos?id=${query.data}&part=snippet,statistics&key=${process.env.REACT_APP_API_KEY}`
    };

    return axios.request(options).then(response => {
        res.status(200).json(response.data)
    }).catch(error => {
        console.error(error)
    })
}