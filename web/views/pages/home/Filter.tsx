import { repeat } from '../../../../core/fp';
import React, { FC } from 'react';
import { IFilterParams } from '../../../../application/domain/todo/ITodoStore';

export const Filter: FC<{ onChange: (props: Partial<IFilterParams>) => void; values: IFilterParams }> = ({
  values,
  onChange,
}) => {
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked={values.caseSensitive}
        onChange={({ target }) => onChange({ caseSensitive: target.checked })}
      />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        CaseSensitive
      </label>
      <input
        type="search"
        className="form-control"
        value={values.search}
        onChange={({ target }) => onChange({ search: target.value })}
      />
      <label htmlFor="min-priority" className="mx-2">
        Min Priority
      </label>
      <select
        id="min-priority"
        value={values.minPriority}
        onChange={({ target }) => onChange({ minPriority: parseInt(target.value) })}
      >
        {repeat(6).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <label htmlFor="max-priority" className="mx-2">
        Max Priority
      </label>
      <select
        id="max-priority"
        value={values.maxPriority}
        onChange={({ target }) => onChange({ maxPriority: parseInt(target.value) })}
      >
        {repeat(6).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};
