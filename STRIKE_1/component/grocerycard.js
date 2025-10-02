export default function Grocerycard({groceData})
{

    return(
        <>
        <div className="flex-none">

        <a href={groceData?.action?.link} >
        <img className="w-42 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceData?.imageId}></img>
        <h1 className="  text-sm font-medium" >{groceData?.action?.text}</h1>
        </a>
        </div>
        </>
    )
}