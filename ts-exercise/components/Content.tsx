interface Course {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courseParts: Course[];
}

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseParts.map((course: Course) => {
        return(
          <p>
            {course.name} {course.exerciseCount}
          </p>
        )
      })}
    </>
  )
}

export default Content;