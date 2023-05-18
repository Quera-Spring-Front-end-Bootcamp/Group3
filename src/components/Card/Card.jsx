
export const Card = (props) => {
    return (
        <div className={`flex flex-col items-center shadow-1 p-6 ${props.className}`}>
            {props.children}
            
        </div>
    );
};