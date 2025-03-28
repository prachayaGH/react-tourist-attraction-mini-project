import TouristCard from "./TouristCard"
import { useState,useEffect } from "react"
import axios from "axios"

function TouristSection() {
    const [touristData,setTouristData] = useState([])
    console.log(touristData)
    const [inputText,setInputText] = useState([])

    useEffect(() => {
        getData()
    },[inputText])

    const getData = async() => {
        try {
            const response = await axios.get(`http://localhost:4001/trips?keywords=${inputText}`)
            setTouristData(response.data.data)
        } catch (error) {
            console.error(error);
        }
    }

    const handleTagClick = (tag) => {
        setInputText((prevInputText) => {
            return prevInputText ? `${prevInputText} ${tag}` : tag; 
        })
    }
    return (
        <div className="tourist-section my-[5%]">
            <div className="flex flex-col justify-center mx-[15%]">
                <h1 className="text-4xl font-bold text-blue-400 text-center mb-4">เที่ยวไหนดี</h1>
                <p>ค้นหาที่เที่ยว</p>
                <input 
                    className="border-b-1 text-center"
                    type="text"
                    placeholder="หาที่เที่ยวแล้วไปกัน ..." 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    />
            </div>
            <div className="w-full flex flex-col items-center">
                {touristData.map((post) => (
                    <TouristCard 
                        key={post.title}
                        post={post}
                        onTagClick={handleTagClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default TouristSection