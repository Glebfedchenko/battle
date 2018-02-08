import React from 'react'

const Repo = ({ repo, i }) =>
    <div>
        <div>#{i + 1}</div>
        <img src={repo.image} className="img-circle img-responsive" alt='' />
        <a href={repo.link}>@{repo.name}</a>
        <p>&#9733;# {repo.starcount}</p>
    </div>
export default Repo