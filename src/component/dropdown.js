import React from 'react'
import Utils from '../utils/utils.js'

let Dropdown = React.createClass({
  getInitialState: function() {
    return {
      listVisible: false,
      list: this.props.list,
      selected: this.props.selected || (this.props.list ? this.props.list[0] : []),
      label: this.props.defaultLabel || (this.props.selected ? this.props.selected.label : '') || (this.props.list ? this.props.list[0].label : '')
    };
  },

  componentWillMount: function() {
    if (this.props.url) {
      Utils.fetch(this.props.url, this.props.method).then((data) => {
        //when props only have url, no list, selected and label, reset list, selected and label
        this.setState({
          list: data.list,
          selected: data.list[0],
          label: this.props.defaultLabel || data.list[0].label
        });
      });
    }
  },

  select: function(item) {
    if (this.state.label != item.label) {
      this.setState({
        label: item.label
      });
      this.props.onChange(item.id);
    }
  },

  show: function() {
    this.setState({
      listVisible: true
    });
    document.addEventListener("click", this.hide);
  },

  hide: function() {
    this.setState({
      listVisible: false
    });
    document.removeEventListener("click", this.hide);
  },

  render: function() {
    return (
      <div className={this.state.listVisible ? 'by-dropmenu by-dropmenu-selected by-fixed-w200' : 'by-dropmenu by-fixed-w200'} onClick={this.show}>
        <div className="by-dropmenu-toggle">
          <div className="by-dropmenu-label-variable">{this.state.label}</div>
          <span className={this.state.listVisible ? 'by-icon by-icon-chevron-up' : 'by-icon by-icon-chevron-down'}></span>
        </div>
        {this.renderListItems()}
      </div>
    )
  },

  renderListItems: function() {
    let items;
    if (this.state.list) {
      items = this.state.list.map((item) => {
        return <li className={(this.state.label == item.label) ? 'by-item by-menuoption-selected' : 'by-item'} key={item.id} value={item.value} onClick={this.select.bind(null, item)}>
          <div className="by-menuoption-marker">
            <span className="dotmarker"></span>
          </div>
          <div className="by-menuoption-label">{item.label}</div>
        </li>
      })
    }
    return (
      <div className="by-dropmenu-options-wrapper by-fixed-width">
        <ul className="by-dropmenu-options">
        {items}
        </ul>
      </div>
    );
  }
});

export default Dropdown;