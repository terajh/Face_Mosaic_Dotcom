import React, {useState, setState, useEffect} from 'react';
import {Image} from 'react-bootstrap';


const Content = (props) => {
    const [url, seturl] = useState(0);
    useEffect(()=>{
        fetch('/api/get_image')
        .then(res => res.json())
        .then(data => {
            if(data.url) seturl('data:image/png;base64,'+data.url);
            console.log('###',data.url);
        });
        
    })
    return (
        <>
            <Image src={url} fluid className="images"/>
        </>
    )
}

export default Content;