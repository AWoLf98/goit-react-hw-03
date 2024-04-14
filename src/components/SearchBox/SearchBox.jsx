import css from './SearchBox.module.css'
export default function SearchBox({value, onFilter}) {
  return (
    <div className={css['search-box']}>
      <label className={css['search-label']} htmlFor="searhbox">Find contacts by name</label>
      <input className={css['search-field']} type="text" value={value} onChange={(evt)=> onFilter(evt.target.value.trim())} placeholder="Input name" name="searhbox" />
    </div>
  );
}
