import React from "react";
import Select from 'react-select'

// Redux
import { useDispatch } from 'react-redux'
import { searchEvents, paginate } from '../../actions/eventActions'

// Styles
import css from "./styles.module.scss";

// Children
import Search from "./Search";

<<<<<<< HEAD
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
        /> 
      </li>
    </ul>
  </div>
=======
const Toolbar = ({ setSearch }) => {
  return (
    <div className={css.toolbar}>
      <ul>
        <li>
          <Search setSearch={setSearch} />
        </li>
      </ul>
      <ul>
        <li onClick={() => setSearch("workshop")}>Workshops</li>
        <li onClick={() => setSearch("training")}>Trainings</li>
        <li onClick={() => setSearch("certification")}>Certifications</li>
        <li onClick={() => setSearch("club")}>Clubs</li>
      </ul>
      <ul>
        <li onClick={() => setSearch("my startup debut")}>#mystartupdebut</li>
        <li onClick={() => setSearch("python")}>#python</li>
        <li onClick={() => setSearch("javascript")}>#javascript</li>
        <li onClick={() => setSearch("talent heist")}>#talentheist</li>
        <li onClick={() => setSearch("school of startup")}>
          #schoolofstartups
        </li>
      </ul>
    </div>
  );
>>>>>>> development
};

export default Toolbar;
