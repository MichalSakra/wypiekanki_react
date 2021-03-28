import React from 'react';
import Section from "../../containers/Section/Section"
import Set from "../../components/Set/Set"
import { connect } from "react-redux"



class Sets extends React.Component {


    render() {
        console.log(this.props);
        return <Section>
            {this.props.sets.map((set, i) => {
                return <Set data={set} />

            })}
        </Section>
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        sets: state.sets.sets

    }

}

export default connect(mapStateToProps)(Sets)