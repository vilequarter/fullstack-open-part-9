interface NotifyProps {
  message: null | string;
}

const Notify = (props: NotifyProps) => {
  if(!props.message) return null;

  return (
    <div style={{color: "red"}}>
      {props.message}
    </div>
  )
}

export default Notify;