
const Barra = ({children, ...props }) => {

    return (
        <div
            className={`h-11 flex bg-zinc-200 items-center px-4 ${props.className}`}
            >
                {children}
            </div>
    )
}

export default Barra;