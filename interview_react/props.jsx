function ParentComponent() {
    const msg ="Hello from parent"
    return <ChildComponent text={msg}/>
}


function ChildComponent(props) {
    return <p>{props.text}</p>
}