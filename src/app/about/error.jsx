"use client"

const Error = ({ error, reset }) => {
    return (
        <div>
            Error : {error.message}
            <button onClick={() => reset()}></button>
        </div>
    )
}
export default Error;
