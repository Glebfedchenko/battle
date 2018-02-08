import React from 'react'
import Repo from './Repo'

const Repositories = ({repos}) =>
<div>
        {repos.map((repo, i) => (
          <div key={i} className='col-md-4 col-sm-4 col-lg-3 col-xs-4 text-center' id='container'>
              <Repo repo={repo} i={i}/>
          </div>
        ))}
      </div>
export default Repositories