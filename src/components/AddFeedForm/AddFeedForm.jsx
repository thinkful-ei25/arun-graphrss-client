import React from 'react';

export default function AddFeedForm({ onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
    >
      <label htmlFor="feedUrl">
        <input type="text" name="feedUrl" id="feedUrl" placeholder="Feed url" />
      </label>
      <button>Add feed</button>
    </form>
  );
}
