function TouristCard(props) {

    
    return (
        <div 
            className="flex gap-8 mt-[4%] mx-auto w-3/4"
            key={props.post.title}
            >
            <img src={props.post.photos[0]} alt="" 
            className="h-[270px] w-[400px] object-cover rounded-4xl"
            />
            <div>
                <a 
                    href={props.post.url} 
                    target="_black" 
                    className="font-bold text-2xl mb-2">{props.post.title}</a>
                <p>
                    {props.post.description.length > 100 
                    ? `${props.post.description.slice(0,100)} ...`
                    : props.post.description}</p>
                <a 
                    href={props.post.url} 
                    target="_black" 
                    className="text-blue-400 underline">อ่านต่อ</a>
                <div>
                <spn className="mr-3">หมวด</spn>
                {props.post.tags.map((tag) => (
                    <button 
                        className="mr-3 underline cursor-pointer"
                        onClick={() => props.onTagClick(tag)}
                    >{tag}</button>
                ))}
                </div>
                <div className="flex mt-4 items-end">
                    {props.post.photos.slice(1).map((photo) => (
                        <img 
                            key={photo} 
                            src={photo} 
                            alt="" 
                            className="rounded-xl mr-6 w-[100px] h-[100px] object-cover"
                            />
                    ))}
                    <button
                        onClick={() => {navigator.clipboard.writeText(props.post.url)}}
                        className="cursor-pointer border-1 border-blue-400 w-15 h-15 flex justify-center items-center rounded-full ml-50"
                    >
                        <svg className="text-blue-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"/>
                        </svg>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default TouristCard