import React from "react";
import { CardList } from "./cardlist";
import { filterArray } from "../helpers/filterlogic";
import { Search } from "./searchboxanddrops";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restraunts: [],
      images: [],
      text: "",
      country: "",
      year: ""
    };
  }
  handleYear = y => {
    this.setState({ year: y });
  };
  handleCountry = c => {
    this.setState({ country: c });
  };

  handleFilter = e => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };
  componentDidMount() {
    fetch("http://starlord.hackerearth.com/TopRamen")
      .then(data => data.json())
      .then(res => {
        this.setState({ restraunts: res });
      });

    fetch(
      "https://api.unsplash.com/search/photos?page=2&query=food&per_page=40&client_id=w94DQWG5wS34Dztmb2NcXD9iLkTCGCPBIitMJIDidvQ"
    )
      .then(res => res.json())
      .then(data => {
        let imgarr = data.results.map(item => {
          if (item.urls.regular !== null) {
            return item.urls.regular;
          }
        });

        let newRes = this.state.restraunts.map(item => {
          let image = imgarr[Math.floor(Math.random() * 30)];

          return { ...item, image };
        });

        this.setState({ restraunts: newRes });
      });
  }

  render() {
    const { restraunts, text, country, year } = this.state;
    const filteredAraay = filterArray(restraunts, text, country, year);

    return (
      <div>
        <Search
          value={this.state.text}
          inputChange={e => this.handleFilter(e)}
          yearChange={y => this.handleYear(y)}
          countryChange={c => this.handleCountry(c)}
        />
        <CardList rest={filteredAraay} />
      </div>
    );
  }
}

export default List;
