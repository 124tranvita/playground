import React, { useState, useRef, useEffect } from 'react';

function Test() {
  const [text, setText] = useState('abc')
  const inputEl = useRef();
  const formEl = useRef();

  const hanldeSubmit = (e) => {
    const value = inputEl.current.value;
    alert(value)
    e.preventDefault();
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        methods: 'GET'
      });
      const data = await response.json();

      console.log(data)
    }
    fetchData();
  }, [])

  return (
    <>
      <div>{text}</div>
      <button onClick={() => setText(123)}>Button</button>
      <form ref={formEl} onSubmit={hanldeSubmit}>
        <input type='text' ref={inputEl} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Test;