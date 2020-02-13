import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItems';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

import './app.scss';

const arr = [{ firstName: "dhruv", lastName: "Joe", email: "sda@gmai.com", age: 24, onlineStatus: true }];


class App extends React.Component {

  fetchUpdatedPosts = () => {
    this.props.fetchPosts();
  }



  render() {
    const configureButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetchUpdatedPosts
    }

    const { posts = [] } = this.props;
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click the button to render posts' tempArr={arr} />
          <SharedButton {...configureButton} />
          {
            posts.length > 0 && <div>
              {posts.map((item, index) => {
                const { title, body } = item;
                const configListItem = {
                  title,
                  desc: body
                }
                return <ListItem {...configListItem} key={index} />
              })}
            </div>
          }
        </section>
      </div>
    )
  }

}





const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
