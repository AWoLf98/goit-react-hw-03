import css from './SearchBox.module.css'
export default function SearchBox({value, onChange}) {
  return (
    <div className={css['search-box']}>
      <label className={css['search-label']} htmlFor="searhbox">Find contacts by name</label>
      <input className={css['search-field']} type="text" value={value} onChange={onChange} placeholder="Input name" name="searhbox" />
    </div>
  );
}
