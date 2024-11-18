import { Entry } from "../src/types";

interface EntryProps {
  entry: Entry;
}

const EntryItem = (props: EntryProps) => {
  return (
    <div>
      <p><b>{props.entry.date}</b></p>
      visibility: {props.entry.visibility}<br />
      weather: {props.entry.weather}<br />
    </div>
  )
}

export default EntryItem;