

const Container = ({ children }) => {
    return (
        <div
            className="h-auto bg-zinc-100 w-[80%] m-auto flex flex-col justify-center gap-3 p-3 border border-gray-300"
        >
            {children}
        </div>
    );
}

export default Container;