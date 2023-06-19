

const SubContainer = ({children}) => {
    return (
        <div 
        style={{
            backgroundColor: 'white',
            height: 'auto',
            width: '100%',
            maxWidth: '90%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
        }}
        >
            {children}
        </div>
    );
}

export default SubContainer;