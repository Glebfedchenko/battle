import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>
<div className='container'>
  <Link className='btn btn-success' to='/'>Popular Github Repositories</Link>
  <Link className='btn btn-danger' to='/battle'>My Github Repo</Link>
</div>
export default Header