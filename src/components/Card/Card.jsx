
export const Card = (props) => {
    return (
        <div className={`flex w-5/12 flex-col items-center rounded-[20px] shadow-1 p-6 ${props.className}`}>
            {props.children}
            
        </div>
    );
};