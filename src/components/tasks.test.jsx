// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, expect, test, vi } from 'vitest';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

afterEach(cleanup);

const task = {
  id: '1',
  title: 'Підготувати доповідь',
  category: 'Навчання',
  deadline: '2026-12-01',
  completed: true,
};

test('форма приймає назву, категорію і дедлайн', () => {
  const save = vi.fn();
  render(<MemoryRouter><TaskForm onSave={save} /></MemoryRouter>);
  fireEvent.change(screen.getByLabelText('Назва завдання'), { target: { value: '  Купити хліб  ' } });
  fireEvent.change(screen.getByLabelText('Категорія'), { target: { value: 'Дім' } });
  fireEvent.change(screen.getByLabelText('Дедлайн (необов’язково)'), { target: { value: '2026-12-02' } });
  fireEvent.click(screen.getByRole('button', { name: 'Додати завдання' }));

  expect(save).toHaveBeenCalledWith({ title: 'Купити хліб', category: 'Дім', deadline: '2026-12-02' });
});

test('форма відхиляє назву з одних пробілів', () => {
  const save = vi.fn();
  render(<MemoryRouter><TaskForm onSave={save} /></MemoryRouter>);
  fireEvent.change(screen.getByLabelText('Назва завдання'), { target: { value: '   ' } });
  fireEvent.click(screen.getByRole('button', { name: 'Додати завдання' }));

  expect(screen.getByRole('alert').textContent).toBe('Введіть назву завдання.');
  expect(save).not.toHaveBeenCalled();
});

test('форма редагування відкривається з поточними даними', () => {
  const save = vi.fn();
  render(<MemoryRouter><TaskForm task={task} onSave={save} /></MemoryRouter>);

  expect(screen.getByLabelText('Назва завдання').value).toBe(task.title);
  fireEvent.change(screen.getByLabelText('Назва завдання'), { target: { value: 'Оновити доповідь' } });
  fireEvent.click(screen.getByRole('button', { name: 'Зберегти зміни' }));
  expect(save).toHaveBeenCalledWith({ title: 'Оновити доповідь', category: task.category, deadline: task.deadline });
});

test('рядок завдання показує статус і передає ідентифікатор обробникам', () => {
  const toggle = vi.fn();
  const remove = vi.fn();
  render(<MemoryRouter><ul><TaskItem task={task} onToggle={toggle} onRemove={remove} /></ul></MemoryRouter>);

  const checkbox = screen.getByRole('checkbox', { name: task.title });
  expect(checkbox.checked).toBe(true);
  expect(screen.getByRole('link').getAttribute('href')).toBe('/tasks/1/edit');
  fireEvent.click(checkbox);
  fireEvent.click(screen.getByRole('button', { name: `Видалити: ${task.title}` }));
  expect(toggle).toHaveBeenCalledWith(task.id);
  expect(remove).toHaveBeenCalledWith(task.id);
});
