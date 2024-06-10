interface KnowInterface {
    title : string;
    description :string;
}

export const Know:React.FC <KnowInterface> = ({title,description}) =>{
    return <div className="text-white bg-blue-700 rounded-2xl w-full lg:w-[43%] lg:mx-7 mb-5 lg:mb-10 p-8">
        <h2 className="text-xl lg:text-3xl text-center lg:text-start font-extrabold">{title}</h2> 
        <br />
        <p className="text-base lg:text-lg font-semibold">{description}</p>
    </div>
}