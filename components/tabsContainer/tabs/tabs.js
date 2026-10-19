import React, { Component } from 'react';
//import PropTypes from 'prop-types';
class TabManager extends Component {
  state = {}

  render() {
    const { activeTab, handleTab, data } = this.props;
    return (
        <div className="tab-manager">
            {
            data.map((item, key) => (
            <div
                className={`tab ${item.value === activeTab ? 'selected-tab' : ''}`}
                onClick={() => { handleTab(item.value); }}
                key={key}
            >
                <h3>{item.label}</h3>
            </div>
            ))
            }
        </div>
    );
  }
}

/*TabManager.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(Object).isRequired,
};*/

export default TabManager;