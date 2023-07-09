
const Barra = ({children}) => {

    return (
        <div
            style={{
                backgroundColor: '#e1e5f2',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '0 20px',
            }}
            >
                {children}

            </div>
    )
}

export default Barra;