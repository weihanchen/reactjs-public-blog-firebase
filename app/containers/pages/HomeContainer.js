import React, {
    Component,
    PropTypes
} from 'react'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux';
import {
    setTitle
} from '../../utils/index'
import {
    requestFetchPosts,
    filterPosts
} from '../../actions'

//compoments
import {
    PostsList
} from '../../components/Posts/index'
import SearchBar from '../../components/SearchBar'


class HomeContainer extends React.Component {

    handleUpdateSearch(filterTitle) {
        this.props.filterPosts(filterTitle)
    }

    componentDidMount() {
        setTitle('Posts List');
        this.props.requestFetchPosts()
    }

    render() {
        return (
            <div>
                <SearchBar  handleUpdateSearch={this.handleUpdateSearch.bind(this)}/>
                <PostsList {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { //從store中取得posts state
        posts: state.posts
    }
}

//原始方式，可做詳細操作，例如combine
// const mapDispatchToProps = (dispatch) =>({
//     requestFetchPosts: () => dispatch(requestFetchPosts()),
//     filterPosts: (text) => dispatch(filterPosts(text))
// })

const mapDispatchToProps = (dispatch) => { //發送請求文章列表的action
    return bindActionCreators({
        requestFetchPosts,
        filterPosts
    }, dispatch)
}

HomeContainer.propTypes = {
    posts: PropTypes.object,
    filterPosts: PropTypes.func,
    requestFetchPosts: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)