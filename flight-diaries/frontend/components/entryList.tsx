import { Entry } from '../src/types';
import EntryItem from './entryItem';

interface EntryListProps {
  entries: Entry[];
}

const EntryList = (props: EntryListProps) => {
  return (
    <>
      <h3>Entries</h3>
      {props.entries.map(entry => {
        return <EntryItem entry={entry} key={entry.date}/>
      })}
    </>
  )
}

export default EntryList;