import React, { Component } from "react";
import Wrapper from "../../decorators/Wrapper";
import Language from "./Language";
import Header from '../Header'
import Repositories from '../Repositories/Repositories'

class Languages extends Component {
  render() {
    const { languages, selected, selectLanguage, repos, loading } = this.props;
    return (
      <div>
        <Header />
        <div className="container text-center">
          {languages.map((lang, i) => (
            <Language
              key={i}
              lang={lang}
              selected={selected}
              onSelect={selectLanguage}
            />
          ))}
          {loading ? 'Loading...' : <Repositories repos={repos}/>}
        </div>
      </div>
    );
  }
}
export default Wrapper(Languages);
