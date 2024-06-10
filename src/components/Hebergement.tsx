import Image from "next/image";

interface HebergementInterface {
    image : string;
    title : string;
    description1 : string;
    description2? : string;
}



export const Hebergement:React.FC <HebergementInterface> = ({image,title,description1,description2}) =>{
    return <div 
      className="border-1 bg-white rounded-3xl w-full lg:w-[30%] px-6 pb-10 mb-3 lg:mb-0 mr-3 lg:mr-0">
        
        <Image src={image} alt={title} width={40} height={40} className="mx-[43%] mt-4 md:mb-5"/>
        <h3 className="text-blue-700 text-lg md:text-xl lg:text-2xl font-bold md:mb-5">{title}</h3>
        <span className="text-base lg:text-lg">{description1}<br /><br />{description2}</span>
    </div>
}