import Spinner from 'react-bootstrap/Spinner'

export default function SpinnerWait(props){

    return (
        <div style={{textAlign:"center"}}>
            <div style={{height:"150Px"}}></div>
        <Spinner animation="grow" variant="info" className="headerImg"/>
        <p>Creating a new group, please wait</p>
        
        </div>
    )
}