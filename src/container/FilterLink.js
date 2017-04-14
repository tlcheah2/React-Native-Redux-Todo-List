import { connect } from 'react-redux'
import { setVisibilityFilter } from '../action/todo'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (filter) => {
            dispatch(setVisibilityFilter(filter))
        }
    }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink