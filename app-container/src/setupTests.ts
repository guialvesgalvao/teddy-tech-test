import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Limpa o DOM após cada teste para evitar interferências
afterEach(() => {
  cleanup();
});
