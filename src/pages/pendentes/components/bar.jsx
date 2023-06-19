
const Barra = ({children}) => {

    return (
        <div
            style={{
                backgroundColor: '#e1e5f2',
                width: '100%',
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                marginBottom: '20px'
            }}
            >
                {children}

            </div>
    )
}

export default Barra