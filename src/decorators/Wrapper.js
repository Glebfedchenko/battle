import React, { Component } from "react";

export default Original =>
  class Wrapper extends Component {
    componentDidMount() {
      this.selectLanguage(this.state.selected);
    }
    state = {
      languages: ["All", "Javascript", "Ruby", "Java", "C#", "Python"],
      selected: "All",
      repos: [],
      loading: true
    };

    selectLanguage = lang => {
      this.setState({
        selected: lang,
        repos: []
      })
      fetch(
        `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=starts&order=desc&type=Repositories`
      )
        .then(response => response.json())
        .then(parsedJSON =>
          parsedJSON.items.map(repo => ({
            name: `${repo.name}`,
            image: `${repo.owner.avatar_url}`,
            login: `${repo.owner.login}`,
            link: `${repo.html_url}`,
            starcount: `${repo.stargazers_count}`
          }))
        )
        .then(repos =>
          this.setState({
            repos: repos,
            loading: false
          })
        )
    }
    render() {
      return (
        <Original
          {...this.props}
          languages={this.state.languages}
          selected={this.state.selected}
          selectLanguage={this.selectLanguage}
          repos={this.state.repos}
          loading={this.state.loading}
        />
      );
    }
  };
