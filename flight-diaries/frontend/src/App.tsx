import { useEffect, useState } from "react";
import { CreateEntryFunction, Entry } from './types';
import { getAllEntries, createEntry } from '../services/entryService';
import EntryForm from '../components/EntryForm';
import EntryList from '../components/EntryList';

const App = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    getAllEntries().then(data => {
      setEntries(data);
    })
  }, [])

  const createNewEntry: CreateEntryFunction = async (date: string, weather: string, visibility: string, comment:string) => {
    try {
      const newEntry = {date, weather, visibility, comment};
      const response = await createEntry(newEntry);
      setEntries(entries.concat(response));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <h1>Flight Diary</h1>
    <EntryForm createEntry={createNewEntry}/>
    <EntryList entries={entries}/>
    </>
  )
}

export default App
