import React, { useState, useEffect } from 'react';

function MarqueeComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from your server
        fetch('https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=Coffee%20Shop&magicKey=dHA9MiNubT1Db2ZmZWUgU2hvcCNzej0xNTEuMjI5MTI5Oi0zMy44Nzk3NDEwMDAwMDAwMDMjY3M9NzAjbG49RWFnbGVMb2NhdG9y&maxLocations=10&outFields=Match_addr%2CPlace_addr%2CType&f=pjson')
            .then(response => response.json())
            .then(data => {
                if (data.candidates) {
                    setData(data.candidates);
                } else {
                    console.error('Candidates data not found in response');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
           <marquee>
    {data.map((item, index) => (
        <div key={index} style={{ color: 'white', fontFamily: 'poppins', fontWeight: 'bolder', display: 'inline-block', marginRight: '20px' }}>
            <div>{item.address}</div>
            <div>${item.score}</div>
        </div>
    ))}
</marquee>


        </div>
    );
}

export default MarqueeComponent;
