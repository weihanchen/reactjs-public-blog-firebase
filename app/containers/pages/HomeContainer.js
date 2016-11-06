import React, {
    Component
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
    requestFetchPosts
} from '../../actions/fetchPosts'

//compoments
import {
    PostsList
} from '../../components/Posts/index'
import SearchBar from '../../components/SearchBar/SearchBar'


class HomeContainer extends React.Component {

    componentDidMount() {
        setTitle('Posts List');
    }

    render() {

        return (
            <div>
                <SearchBar  />
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

const mapDispatchToProps = (dispatch) => { //發送請求文章列表的action
    return bindActionCreators(requestFetchPosts, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)