import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('coffee')).toBe('coffee');
  });

  test('with additional class', () => {
    const expected = 'coffee hugs for bugs';
    expect(classNames('coffee', {}, ['hugs', 'for', 'bugs'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'coffee hugs for bugs hovered selected';
    expect(classNames('coffee', { hovered: true, selected: true }, ['hugs', 'for', 'bugs'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'coffee hugs for bugs selected';
    expect(classNames('coffee', { hovered: false, selected: true }, ['hugs', 'for', 'bugs'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'coffee hugs for bugs hovered';
    expect(classNames('coffee', { hovered: true, selected: undefined }, ['hugs', 'for', 'bugs'])).toBe(expected);
  });
});
