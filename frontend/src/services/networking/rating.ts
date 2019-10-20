import Client from './client';

export const getRating = (address: string) => 
    Client.get(`https://9hgxag6lcl.execute-api.eu-west-2.amazonaws.com/dev/getRating?address=${address}`, '')
        .then(response => {
            return response.rating;
        })

