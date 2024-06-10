import Image from "next/image"

interface AvisInterface {
    image : string;
    title : string;
    description : string;
    author : string;
}

export const Avis:React.FC <AvisInterface> = ({image, title, description, author}) => {
    return <div className=" bg-white border-2 rounded-2xl w-full lg:w-[28%] px-[2.3rem] pt-10 pb-5 mt-[5rem] lg:mt-[5rem] relative">
        <Image className="absolute left-[38%] lg:left-[34%] bottom-[70%] lg:bottom-[80%] bg-white rounded-full p-2 mb-5" src ={image} alt={title} width={120} height={100} />
        <h1 className="font-bold text-center lg:text-start text-lg mt-8">{title}</h1>
        <br />
        <p className="text-justify">{description}</p>
        <br />
        <p className="font-bold">{author}</p>
    </div>
}