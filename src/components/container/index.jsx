import SubContainer from "./subContainer";

const Container = ({ children }) => {
    return (
        <div 
        style={{
            backgroundColor: '#edf6f9',
            height: '100vh',
            width: '100vw',
        }}  
        >
        <SubContainer>
            {children}
        </SubContainer>
        </div>
    );
}

export default Container;