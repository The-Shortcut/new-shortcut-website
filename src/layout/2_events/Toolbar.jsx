import React from "react";
import Select from 'react-select'

// Redux
import { useDispatch } from 'react-redux'
import { searchEvents, paginate } from '../../actions/eventActions'

// Styles
import css from "./styles.module.scss";

// Children
import Search from "./Search";

const Toolbar = ({setSearch}) => {
  const dispatch = useDispatch()

  // Search terms
  const options = [
    {value: 'All', label: 'All'},
    {value: 'workshop', label: 'workshop'},
    {value: 'training', label: 'training'},
    {value: 'certification', label:'certification'},
    {value: 'club', label:'club'},
    {value:'my startup debut', label:'my startup debut'},
    {value:'python', label:'python'},
    {value:'talent heist', label:'talent heist'},
    {value:'school of startup', label:'school of startup'}
  ]

  const handleSearch = term => {
    if(term === 'All'){
      term = ''
    }
    dispatch(searchEvents(term))
    dispatch(paginate(1))
  }

  return <div className={css.toolbar}>
    <ul>
      <li>
          <Search setSearch={setSearch} />
      </li>
      <li>
        <Select 
            options={options} 
            onChange={(e) => handleSearch(e.label)} 
            placeholder="search terms"
            styles={{control: () => ({display:'flex', border:'none'})}}
        /> 
      </li>
    </ul>
  </div>
};

export default Toolbar;
