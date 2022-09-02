import React from "react";
function randlnt(min,max){
    let x = (max-min) + 1
    return min + Math.floor(Math.random()*x)
}
export default function Banner(){
    const r = randlnt(1,3)
    let banner = ''
    let url = ''

    switch(r){
        case 1:
            banner = './banners/cat.jpg'
            url = 'https://www.cate.org'
            break
        case 2:
            banner = './banners/dog.jpg'
            url = 'https://www.dog.com'
            break
        case 3:
            banner = './banners/pig.jpg'
            url = 'https://www.pig.org'
            break
        default: break
    }
    const bannerClick = () => {
        window.open(url) //window.location.href = url
    }
    return (
        <div style={{margin: '20px', textAlign: 'center'}}>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}} alt="banner"/>
        </div>
    )
}