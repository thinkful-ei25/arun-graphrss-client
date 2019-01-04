import React from 'react';

export default function AddFeedForm({ onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
    >
      <label>
        Add new feed
        <input type="text" name="feedUrl" id="feedUrl" placeholder="Feed url" />
      </label>
      <button>Add feed</button>
    </form>
  );
}
