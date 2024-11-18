import { useState } from 'react';
import { CreateEntryFunction } from '../src/types';

interface EntryFormProps {
  createEntry: CreateEntryFunction;
}

const EntryForm = (props: EntryFormProps) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('sunny');
  const [visibility, setVisibility] = useState('great');
  const [comment, setComment] = useState('');

  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    props.createEntry(date, weather, visibility, comment);

    setDate('');
    setWeather('sunny');
    setVisibility('great');
    setComment('');
  }

  return (
    <>
      <h3>New Entry</h3>
      <form onSubmit={submit}>
        <div>
          date
          <input
            type="date"
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </div>
        <div>
          weather
          <select
            value={weather}
            onChange={({ target }) => setWeather(target.value)}
          >
            <option value="sunny">sunny</option>
            <option value="rainy">rainy</option>
            <option value="cloudy">cloudy</option>
            <option value="stormy">stormy</option>
            <option value="windy">windy</option>
          </select>
        </div>
        <div>
          visibility
          <select
            value={visibility}
            onChange={({ target }) => setVisibility(target.value)}
          >
            <option value="great">great</option>
            <option value="good">good</option>
            <option value="ok">ok</option>
            <option value="poor">poor</option>
          </select>
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