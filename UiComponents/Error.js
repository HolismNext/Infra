const Error = ({ children }) => {
    return <div className="error break-normal text-red-400" style={{ whiteSpace: 'break-spaces' }}>
        {children}
    </div>
}

export default Error;