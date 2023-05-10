import { FC } from "react";

export const Balance: FC = () => {
        var result;
        fetch('https://api.mainnet-beta.solana.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'jsonrpc': '2.0',
        'id': 1,
        'method': 'getTokenAccountBalance',
        'params': [
            'EnK84a73XvMnJ7VoBx3MXDLZK3okdLx7Hu2RyAyUfHrt'
             ]
         })
         
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
    .then(response => result = response);
    return result;
}