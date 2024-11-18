import { useState } from 'react';
import { CreateEntryFunction } from '../src/types';

interface EntryFormProps {
  createEntry: CreateEntryFunction;
}

const EntryForm = (props: EntryFormProps) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('');
  const [visibility, setVisibility] = useState('');
  const [comment, setComment] = useState('');

  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    props.createEntry(date, weather, visibility, comment);

    setDate('');
    setWeather('');
    setVisibility('');
    setComment('');
  }

  return (
    <>
      <h3>New Entry</h3>
      <form onSubmit={submit}>
        <div>
          date
          <input
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </div>
        <div>
          weather
          <input
            value={weather}
            onChange={({ target }) => setWeather(target.value)}
          />
        </div>
        <div>
          visibility
          <input
            value={visibility}
            onChange={({ target }) => setVisibility(target.value)}
          />
        </div>
        <div>
          comment
          <input
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </div>
        <button type="submit">create entry</button>
      </form>
    </>
  )
}

export default EntryForm;