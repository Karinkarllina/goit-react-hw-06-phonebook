import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "redux/createSlice";
import css from './Filter.module.css'

export const Filter = () => {

  const filterValue = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const filterChange = event => { dispatch(filterContact(event.currentTarget.value));};

    return (

     <form className= {css.formFilter}>
        <label className={css.formFilterLabel}>
            Find contacts by name:
            <input className={css.formFilterInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              value={filterValue}
              onChange={filterChange}
            />
          </label>
        </form>        
    )

}



