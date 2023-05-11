import { FC } from "react";

var currency;

export const Balance: FC = () => {
        fetch('https://api.mainnet-beta.solana.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'jsonrpc': '2.0',
        'id': 1,
        'method': 'getTokenAccountsByOwner',
        'params': [
            'EnK84a73XvMnJ7VoBx3MXDLZK3okdLx7Hu2RyAyUfHrt', //this one shouldn't be hardcoded, need to parse this value (user wallet address) after connecting Phantom
            {
                'mint': '7rNsURFKY3BWAfpA5a4Rgr5Kpy42a9kwpxPq3xrqyouu'
            },
            {
                'encoding': 'jsonParsed'
            }
        ]
    })
})
    .then(response => {return response.json()})
    .then(wallet => { 
      var balance = [];
      balance.push(wallet);
      const uiAmount = wallet.result.value[0].account.data.parsed.info.tokenAmount.uiAmount;
      const currency = uiAmount.toLocaleString('en-US');
      return currency; //not sure how to return only this value for this component
    })

    return currency; //^^^
}