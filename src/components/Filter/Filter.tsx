import { useDispatch } from "react-redux"
import { FilterPropsType, filterOptions } from "../../models/models"
import { changeFilter } from "../../store/filterSlice"

const Filter = ({ title, name }: FilterPropsType) => {
  const Options = filterOptions[name as keyof typeof filterOptions]
  const dispatch: any = useDispatch()

  return (
    <fieldset>
      <legend>Filter By { title }</legend>
        {Options.map(option => 
          <label key={ option }>
            <input
              onChange={ () => dispatch(changeFilter({ name, option })) }
              type="radio"
              name={ name }
              value={ option }
            />
            { title } - { option }
          </label>
        )}
      </fieldset>
  )
}

export { Filter }