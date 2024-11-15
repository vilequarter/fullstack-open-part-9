import { CoursePart } from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  )
}

interface PartProps {
  part: CoursePart;
}

const Part = (props: PartProps) => {
  const renderPart = (part: CoursePart) => {
    switch(part.kind){
      case "basic":
        return <i>{part.description}</i>
      case "background":
        return (<>
          <i>{part.description}</i><br />
          {part.backgroundMaterial}
        </>)
      case "group":
        return <>Group project exercises: {part.groupProjectCount}</>
      case "special":
        return (
          <>
            <i>{part.description}</i><br />
            Requirements: {part.requirements.map(req => <>{req} </>)}
          </>
        )
      default:
        return assertNever(part)
    }
  }
  return (
    <>
      <b>{props.part.name}: {props.part.exerciseCount}</b><br />
      {renderPart(props.part)}
    </>
  )
}

export default Part;