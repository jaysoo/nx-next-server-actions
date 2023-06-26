'use client';

import { useState } from 'react';
import { addItem } from './action';

export function TestComponent() {
  return (
    <form action={addItem}>
      <button type="submit">Add</button>
    </form>
  );
};
