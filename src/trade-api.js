let rest = await axios.post('https://www.pathofexile.com/api/trade/search/Heist', {
    "query": {
        "filters": {
            "trade_filters": {
                "disabled": false,
            },
            "misc_filters": {
                "filters": {
                    "corrupted": {
                        "option": "false",
                    },
                    "gem_level": {
                        // "min": 1,
                        // "max": 1,
                    },
                    "quality": {
                        // "min": 1,
                        ///"max": 1,
                    },
                }
            }
        },
        name: 'Tabula Rasa',
        type: 'Simple Robe',
        "status": {
            "option": "online"
        },
        // "name": "The Cheater"
        // "type": "The Cheater"
    },
    "sort": {
        // "price": "asc"
    }
}, {
    headers: {
        'content-type': 'application/json',
    }
});


console.log(`rest`, rest);
