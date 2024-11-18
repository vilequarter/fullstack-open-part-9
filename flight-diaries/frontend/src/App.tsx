import { useEffect, useState } from "react";
import { CreateEntryFunction, Entry } from './types';
import { getAllEntries, createEntry } from '../services/entryService';
import EntryForm from '../components/EntryForm';
import EntryList from '../components/EntryList';
import Notify from '../components/notify';
import axios from "axios";

const App = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [message, setMessage] = useState<null | string>(null);

  useEffect(() => {
    getAllEntries().then(data => {
      setEntries(data);
    })
  }, [])

  const notify = (message: string) => {
    setMessage(message);
    setTimeout(() => setMessage(null), 5000)
  }

  const createNewEntry: CreateEntryFunction = async (date: string, weather: string, visibility: string, comment:string) => {
    try {
      const newEntry = {date, weather, visibility, comment};
      const response = await createEntry(newEntry);
      setEntries(entries.concat(response));
    } catch (error) {
      if(axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
        notify(error.response.data);
      } else {
        console.log(error);
      }
    }
  }

  return (
    <>
    <h1>Flight Diary</h1>
    <Notify message={message}/>
    <EntryForm createEntry={createNewEntry}/>
    <EntryList entries={entries}/>
    </>
  )
}

export default App
