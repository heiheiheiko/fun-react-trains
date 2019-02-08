import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl'
import { updateTrainFilter } from "../../redux/actions";

class TrainFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterFieldValue: "",
    };
  }

  onChange(){
    this.setState({filterFieldValue: event.target.value});
  }

  onSubmit(){
    event.preventDefault();
    this.props.updateTrainFilter(this.state.filterFieldValue);
  }

  render() {
    return (
      <form onSubmit={() => this.onSubmit()}>
        <div className="field has-addons">
          <div className="control">
            <FormattedMessage id="aside.trainFilterForm.placeholder"> 
              {(trans) => (
                <input 
                  className="input"
                  type="text" 
                  name="filter" 
                  value={this.state.filterFieldValue} 
                  placeholder={trans}
                  onChange={() => this.onChange()} 
                />
              )}
            </FormattedMessage>
          </div>
          <div className="control">
            <FormattedMessage id="actions.apply"> 
              {(trans) => (  
                <input className="button is-primary" type="submit" value={trans} />
              )}
            </FormattedMessage>
          </div>
        </div>
      </form>
    );
  }
}

TrainFilterForm.propTypes = {
  updateTrainFilter: PropTypes.func,
};

const mapDispatch = dispatch => ({
  updateTrainFilter: trainFilterString => dispatch(updateTrainFilter(trainFilterString)) 
});
const ConnectedComponent = connect(null, mapDispatch)(TrainFilterForm);
export default ConnectedComponent;
