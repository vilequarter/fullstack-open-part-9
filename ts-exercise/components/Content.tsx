import Part from './Part';
import { CoursePart } from '../types';

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseParts.map((course: CoursePart) => {
        return(
          <p>
            <Part part={course} />
          </p>
        )
      })}
    </>
  )
}

export default Content;