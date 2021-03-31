import React from 'react';
import Section from "../../containers/Section/Section"
import Set from "../../components/Set/Set"
import { connect } from "react-redux"
import classes from './Sets.module.sass';



class Sets extends React.Component {


    render() {

        return <Section classes={classes.Sets}>
            {this.props.sets.map((set, i) => {
                return <Set key={set.id} data={set} />

            })}
        </Section>
    }
}
const mapStateToProps = state => {

    return {
        sets: state.sets.sets

    }

}

export default connect(mapStateToProps)(Sets)